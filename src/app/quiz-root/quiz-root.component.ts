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
      question: [''],
      answers: this._fb.array([
        this.initAnswer(),
      ])
    });
  }

  initAnswer(): FormGroup {
    return this._fb.group(
      {
        answerTitle: [''],
        correct: [false] //this.mustBeChecked
      },
    );
  }


  //single checkbox logic
  //called from tmp
  validateAnswerChoice(e, index, control) {
    //console.log(control.get('correct')); //.errors['mustBeCheckedError']);
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
    //console.log(model);
    //this.myForm.setErrors({"bla": "bla"});
    let errorFound = this.validateCheckboxsesOnSubmit();
    if (errorFound) return null;

    console.log("save");
  }

  //validate in submit, because we need to check more than one form control value
  validateCheckboxsesOnSubmit(): boolean {
    const control = <FormArray>this.myForm.get('answers');
    var found = false;
    for (let i = 0; i < control.length; i++) {
      control.controls[i].get('correct').value === true ? found = true : found = false;
    }
    if (!found) {
      this.myForm.setErrors({ "NotSingleCheckBoxSelected": "Not a single checkbox is selected." });
      return true;
    }
    return false;
  }

  //single checkbox validator, not used
  mustBeChecked(control: FormControl): { [key: string]: string } {
    if (!control.value) {
      return { 'mustBeCheckedError': 'Must be checked' };
    } else {
      return null;
    }
  }

}
