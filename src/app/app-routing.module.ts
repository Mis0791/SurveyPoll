import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { SurveyPollComponent } from './survey-poll/survey-poll.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'createpoll', pathMatch: 'full', component: CreatePollComponent},
  {path: 'question/:id', pathMatch: 'full', component: SurveyPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
