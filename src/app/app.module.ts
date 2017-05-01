import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { TriviaComponent } from './trivia/trivia.component';
import { AnswerControlComponent } from './trivia/answer-control.component';
import { AnswersArrayComponent } from './trivia/answers-array.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    AnswerControlComponent,
    AnswersArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
