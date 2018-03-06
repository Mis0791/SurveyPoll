import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  question;
  allusers;
  allquestions;

  constructor(private _mainservice: MainService, private _router: Router) {
    this.username = { name: '' }
    this.question = { content: '', creator: '', option1: '', option2: '' }
    this.allusers = [];
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

  showAll() {
    this._mainservice.showAll((data) => {
      // console.log("back to comp");
      this.allquestions = data;
      // console.log("working?")
    })
  }


  ngOnInit() {
    this.checkSession();
    this.showAll();
  }

}
