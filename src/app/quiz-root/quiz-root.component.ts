import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
//import { Quiz } from './models/quiz.interface';

@Component({
  selector: 'app-quiz-root',
  templateUrl: './quiz-root.component.html',
  styleUrls: ['./quiz-root.component.css']
})
export class QuizRootComponent implements OnInit {

  myForm: FormGroup;
  checkboxTracker: boolean[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      question: ['', [Validators.required, Validators.minLength(1)]],
      answers: this._fb.array([
        this.initAnswer(),
      ])
    });

    //checkbox tracker init
    this.initCheckboxTracker();
  }

  initCheckboxTracker() {
    let answersFA: FormArray = <FormArray>this.myForm.controls['answers'];
    for (let i = 0; i < answersFA.length; i++) {
      this.checkboxTracker.push(false);
    }
  }

  initAnswer(): FormGroup {
    return this._fb.group(
      {
        answerTitle: ['', Validators.required],
        correct: [false]
      },
    );
  }

  //TODO
  validateAnswerChoice(e, i) {
    if (e.target.checked) {
      this.checkboxTracker  = this.checkboxTracker.map((val, index) => {
        return i === index ? true : false;
      });
    } else {
      this.checkboxTracker[i] = false;
    }

  }

  removeFromCheckboxTracker(i: number): void {
    this.checkboxTracker = this.checkboxTracker.filter((x, index) => {
      return (index !== i);
    });
  }

  addAnswer(): void {
    const control = <FormArray>this.myForm.controls['answers'];
    control.push(this.initAnswer());
    this.checkboxTracker.push(false);
  }

  removeAnswer(i: number) {
    const control = <FormArray>this.myForm.controls['answers'];
    control.removeAt(i);
    this.removeFromCheckboxTracker(i);
  }

  save(model: FormGroup) {
    console.log(model);
  }

}
