import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswersArrayComponent } from './answers-array.component';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      question: [''],
      answers: AnswersArrayComponent.buildItems()
    });
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm.value)
  }

}
