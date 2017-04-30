import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AlertModule } from 'ng2-bootstrap';
import { QuizRootComponent } from './quiz-root/quiz-root.component';
import { AnswerComponentComponent } from './quiz-root/answer-component/answer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    QuizRootComponent,
    AnswerComponentComponent,
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
