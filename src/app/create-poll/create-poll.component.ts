import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  username;
  question;
  allquestions;

  constructor(private _mainservice: MainService, private _router: Router, private _route: ActivatedRoute) { 
    this.username = {name: ''},
    this.question = { content: '', creator: '', option1: '', option2: '' },
    this.allquestions = [];
  }

  checkSession() {
    this._mainservice.checkSession((data) => {
      this.username = data.user
      if (!this.username) {
        this._router.navigate(['/'])
      }
    })
  }

  addQuestion(){
    this._mainservice.addQuestion(this.question, (data)=>{
      // console.log('component addquestion function', this.question)
      this.question = data
      this.allquestions.push(data)
      if(this.question){
        this._router.navigate(['/home'])
      }
    })
  }

  ngOnInit() {
    this.checkSession();
  }

}
