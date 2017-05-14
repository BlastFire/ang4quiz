import { Component, EventEmitter, Input, OnInit, Output, DoCheck, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnswersArrayComponent } from './answers-array.component';
import { AnswerControlComponent } from './answer-control.component';
import { TriviaService } from './services/trivia.service';
import { Trivia, Question } from './models/trivia.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  static messageTimeout: number = 2000; //2 secs

  myForm: FormGroup;
  formSaved: boolean = false;

  constructor(private fb: FormBuilder, private triviaService: TriviaService, private router: Router) { }

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      answers: AnswersArrayComponent.buildItems()
    });
  }

  questionData: Question;

  submit(myForm: FormGroup) {
    let error = this.validateCheckboxsesOnSubmit();
    //return early
    if (error || !myForm.valid) return null;

    //pushin data to service
    this.pushQuestionData(myForm.value);

    this.resetForm();
    this.showMessageSuccess();

    console.log("Reactive Form submitted: ", this.triviaService.questions);
    return null;
  }

  pushQuestionData(myFormValue: any) {
    myFormValue.id = this.triviaService.nextQuestionId();
    this.triviaService.questions.push(myFormValue);
    console.log(this.triviaService.questions);
  }

    finishClicked() {
    this.saveData();
    //redirect to home
    //this.router.navigate(['/']);
  }

  saveData() {
    this.triviaService.trivia.push({ id: this.triviaService.nextTriviaId(), triviaName: <string><any>this.triviaService.trivia.length + 1, questions: this.triviaService.questions });
    this.triviaService.questions = [];
    console.log(this.triviaService.trivia);
  }

  showMessageSuccess() {
    this.formSaved = true;
    setTimeout(() => {
      this.formSaved = false;
    }, QuestionComponent.messageTimeout);
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
