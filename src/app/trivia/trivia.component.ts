import { Component, EventEmitter, Input, OnInit, Output, DoCheck, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswersArrayComponent } from './answers-array.component';
import { AnswerControlComponent } from './answer-control.component';
import { TriviaService } from './services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  static messageTimeout: number = 2000; //2 secs

  myForm: FormGroup;
  formSaved: boolean = false;

  constructor(private fb: FormBuilder, private triviaService: TriviaService) { }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      question: ['', Validators.required],
      answers: AnswersArrayComponent.buildItems()
    });
  }

  //TODO.. redirect to home page where would be the statistic for all the quests
  finishClicked() {
    console.log("clicked");
  }

  submit() {
    let error = this.validateCheckboxsesOnSubmit();
    //return early
    if (error || !this.myForm.valid) return null;

    this.triviaService.trivia.push(this.myForm.value);

    this.resetForm();
    this.showMessageSuccess();

    console.log("Reactive Form submitted: ", this.triviaService.trivia);
    return null;
  }

  showMessageSuccess() {
    this.formSaved = true;
    setTimeout(() => {
      this.formSaved = false;
    }, TriviaComponent.messageTimeout);
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
