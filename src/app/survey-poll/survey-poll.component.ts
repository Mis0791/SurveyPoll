import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../main.service';

@Component({
  selector: 'app-survey-poll',
  templateUrl: './survey-poll.component.html',
  styleUrls: ['./survey-poll.component.css']
})
export class SurveyPollComponent implements OnInit {
  questionId;
  question;
  allquestions;

  constructor(private _mainservice: MainService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      this.questionId = params.get('id');
    })
    this.question = { content: '', creator: '', option1: '', option2: '' }
    this.allquestions = [];
  }

  getOneQuestion(){
    console.log(this.questionId)
    this._mainservice.getOneQuestion(this.questionId, (data)=>{
      // console.log(data, 'hello')
      this.question = data;
    })
  }

  addVote(id, option) {
    // console.log(id, option)
    this._mainservice.addVote(id, option, (data)=>{
      // console.log(data)
      this.question = data;
    })
  }

  ngOnInit() {
    this.getOneQuestion();
  }

}
