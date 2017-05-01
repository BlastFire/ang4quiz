import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerControlComponent } from './answer-control.component';

@Component({
  selector: 'app-answers-array',
  templateUrl: './answers-array.component.html',
  styleUrls: ['./answers-array.component.css']
})
export class AnswersArrayComponent implements OnInit {

  @Input() answersFormArray: FormArray;

  constructor() { }

  ngOnInit() {
  }

  addAnswer() {
    this.answersFormArray.push(AnswerControlComponent.buildItem(''));
  }

  static buildItems() {
    return new FormArray([
      AnswerControlComponent.buildItem('')
    ]);
  }

}
