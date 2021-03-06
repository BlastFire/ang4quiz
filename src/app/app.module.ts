import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { TriviaComponent } from './trivia/trivia.component';
import { AnswerControlComponent } from './trivia/answer-control.component';
import { AnswersArrayComponent } from './trivia/answers-array.component';
import { TriviaMainComponent } from './trivia/trivia-main/trivia-main.component';
import { TriviaStartComponent } from './trivia/trivia-start/trivia-start.component';
import { TriviaHomeinfoComponent } from './trivia/trivia-homeinfo.component';
import { TriviaService } from './trivia/services/trivia.service';

const appRoutes: Routes = [
  { path: '', component: TriviaHomeinfoComponent },
  { path: 'create-trivia', component: TriviaComponent },
  { path: 'start-trivia', component: TriviaStartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    AnswerControlComponent,
    AnswersArrayComponent,
    TriviaMainComponent,
    TriviaStartComponent,
    TriviaHomeinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
