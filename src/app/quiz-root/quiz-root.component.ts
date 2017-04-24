import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Quiz, Answer } from './models/quiz.interface';

@Component({
  selector: 'app-quiz-root',
  templateUrl: './quiz-root.component.html',
  styleUrls: ['./quiz-root.component.css']
})
export class QuizRootComponent implements OnInit {

  myForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      question: ['', [Validators.required, Validators.minLength(1)]],
      answers: this._fb.array([
        this.initAnswer(),
      ])
    });
  }

  initAnswer(): FormGroup {
    return this._fb.group(
      {
        answerTitle: ['', Validators.required],
        correct: [false]
      },
    );
  }

  //single checkbox logic
  //called from tmp
  validateAnswerChoice(e, index, control) {
    var answersTmp = <FormArray>this.myForm.controls['answers'];
    if (e.target.checked) {
      for (let i = 0; i < answersTmp.length; i++) {
        i === index ? this.setCheckboxControlValue(i, true) : this.setCheckboxControlValue(i, false);
      }
    } else {
      this.setCheckboxControlValue(index, false);
    }
  }

  addAnswer(): void {
    const control = <FormArray>this.myForm.get('answers');
    control.push(this.initAnswer());
  }

  removeAnswer(i: number) {
    const control = <FormArray>this.myForm.get('answers');
    control.removeAt(i);
  }

  private setCheckboxControlValue(index, value) {
    this.myForm.get('answers.' + index + ".correct").setValue(value);
  }

  //form submit method
  //called from tmp
  save(model: FormGroup) {
    console.log(model);
  }

}
