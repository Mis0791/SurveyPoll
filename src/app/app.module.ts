import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainService } from './main.service';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { SurveyPollComponent } from './survey-poll/survey-poll.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreatePollComponent,
    SurveyPollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
