import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Quiz } from './models/quiz.interface';

@Component({
  selector: 'app-quiz-root',
  templateUrl: './quiz-root.component.html',
  styleUrls: ['./quiz-root.component.css']
})
export class QuizRootComponent implements OnInit {

  myForm: FormGroup; //our form model

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      question: ['', Validators.required, Validators.minLength(5)],
      answers: this._fb.array([
        this.initAnswer(),
      ])
    });
  }

  initAnswer(): FormGroup {
    return this._fb.group({
      content: ['', Validators.required],
      correct: ['']
    });
  }

  addAnswer(): void {
    const control = <FormArray>this.myForm.controls['answers'];
    control.push(this.initAnswer());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['answers'];
    control.removeAt(i);
  }

  save(model: Quiz) {
    console.log("model");
  }

}
