import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswersArrayComponent } from './answers-array.component';
import { AnswerControlComponent } from './answer-control.component';
import { Trivia } from './models/trivia.interface';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  myForm: FormGroup;
  trivia: Trivia[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      question: ['', Validators.required],
      answers: AnswersArrayComponent.buildItems()
    });
  }

  submit() {
    let error = this.validateCheckboxsesOnSubmit();
    //return early
    if (error || !this.myForm.valid) return null;

    this.trivia.push(this.myForm.value);

    this.resetForm();

    console.log("Reactive Form submitted: ", this.trivia);
    return null;
  }

  resetForm(): void {
    this.myForm.reset();
    const control = <FormArray>this.myForm.get('answers');
    control.controls[0].get('cbTitle').setValue(AnswerControlComponent.checkboxTitleDefault);
  }

  //validate in submit, because we need to check more than one form control value
  validateCheckboxsesOnSubmit(): boolean {
    const control = <FormArray>this.myForm.get('answers');
    var found = false;
    for (let i = 0; i < control.length; i++) {
      found = control.controls[i].get('correct').value === true ? true : false;
      break;
    }
    if (!found) {
      this.myForm.setErrors({ "NotSingleCheckBoxSelected": "Not a single checkbox is selected." });
      return true;
    }
    return false;
  }

}
