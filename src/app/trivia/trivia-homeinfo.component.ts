import { Component, OnInit } from '@angular/core';
import { TriviaService } from './services/trivia.service';

@Component({
  selector: 'app-trivia-homeinfo',
  templateUrl: './trivia-homeinfo.component.html',
  styleUrls: ['./trivia-homeinfo.component.css']
})
export class TriviaHomeinfoComponent implements OnInit {

  constructor(private triviaService: TriviaService) { }

  ngOnInit() {

  }

}
