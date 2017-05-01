import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-answer-control',
  templateUrl: './answer-control.component.html',
  styleUrls: ['./answer-control.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerControlComponent implements OnInit {

  @Input()
  public index: number;

  @Input()
  public answer: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  validateAnswerChoice(e, index, control) {
    var answersTmp = <FormArray>control.parent;
    if (e.target.checked) {
      for (let i = 0; i < answersTmp.length; i++) {
        i === index ? this.setCheckboxControlValue(control, i, true) : this.setCheckboxControlValue(control, i, false);
      }
    } else {
      this.setCheckboxControlValue(control, index, false);
    }

  }

  private setCheckboxControlValue(control, index, value) {
    control.parent.controls[index].get('correct').setValue(value);
  }

  static buildItem(val: string) {
    return new FormGroup({
      answerTitle: new FormControl(val),
      correct: new FormControl(false)
    })
  }

}
