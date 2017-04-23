import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AlertModule } from 'ng2-bootstrap';
import { QuizRootComponent } from './quiz-root/quiz-root.component';
import { AdressTestComponent } from './adress-test/adress-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    QuizRootComponent,
    AdressTestComponent
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
