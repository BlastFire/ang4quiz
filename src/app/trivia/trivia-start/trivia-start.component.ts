import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../services/trivia.service';
import { Question } from '../models/trivia.interface';

@Component({
  selector: 'app-trivia-start',
  templateUrl: './trivia-start.component.html',
  styleUrls: ['./trivia-start.component.css']
})

//This is the wrapper for the trivia wizzard component
export class TriviaStartComponent implements OnInit {

  triviaId: number;
  qq: Question;
  configQQ: Question;

  constructor(private route: ActivatedRoute, private triviaService: TriviaService) { }

  ngOnInit() {
    //this.triviaId = this.route.snapshot.params['id'];
    //console.log(this.route.snapshot);
    this.configQQ = this.triviaService.dummyData()[0].questions[0];
    console.log(this.configQQ.answers);
  }

  next(form: any) {
    console.log(form.value);
  }

}
