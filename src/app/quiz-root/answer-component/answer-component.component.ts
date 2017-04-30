import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  @Input() answerFeed: string;
  @Input() currentIndex: number;
  @Input() showDelete: boolean;

  constructor() { }

  ngOnInit() {
  }

}
