import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
  users;
  buckets;

  constructor(private _http: Http) { 
    this.users = [];
    this.buckets = [];
  }

  login(user, callback){
    this._http.post('/login', user).subscribe((res)=>{
      callback(res.json());
    })
  }

  checkSession(callback){
    this._http.get('/checksess').subscribe((res)=>{
      callback(res.json());
    })
  }

  addQuestion(question, callback){
    // console.log(question, "service add question")
    this._http.post('/addQuestion', question).subscribe((res)=>{
      callback(res.json());
    })
  }

  showAll(callback){
    this._http.get('/showAll').subscribe((res)=>{
      callback(res.json());
    })
  }

  getOneQuestion(id, callback){
    // console.log("in service!")
    this._http.get('/getOneQuestion/' + id).subscribe((res)=>{
      // console.log('service', res.json())
      callback(res.json());
    })

  }

  addVote(id, option, callback){
    // console.log(id, option, "service")
    this._http.get('/addVote/' + id + '/' + option).subscribe((res)=>{
      callback(res.json());
    })
  }




}


