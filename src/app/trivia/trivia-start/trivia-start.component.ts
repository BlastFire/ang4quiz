import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TriviaService } from '../services/trivia.service';
import { Question } from '../models/trivia.interface';
import { UserResultService } from '../services/user-result.service';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-trivia-start',
  templateUrl: './trivia-start.component.html',
  styleUrls: ['./trivia-start.component.css']
})

//This is the wrapper for the trivia wizzard component
export class TriviaStartComponent implements OnInit {

  triviaId: number;
  configQQ: Question;

  dataSaver: any[] = [];
  nextQuestionArrId: number = 0;
  questionArrLength: number = 0;

  finish: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private triviaService: TriviaService,
    private userService: UserResultService,
    private http: Http,
    private webService: WebService
  ) { }

  ngOnInit() {
    //this.triviaId = this.route.snapshot.params['id'];
    this.triviaId = 0;
    this.questionArrLength = this.getQuestionArrLength();
    this.configQQ = this.getNextQuestion();
  }

  next(form: any) {

    //saving form data
    this.saveFormData(form.value);

    //load the new config
    if (this.hasMoreQuestions()) {
      this.configQQ = this.getNextQuestion();
    } else {
      console.log("finish the questions");
      //trivia is over, add the data to web service
      this.prepResultDataAndSaveInService(this.dataSaver);

      //redirect to statistics page
      //this.router.navigate(['/statistics']);

    }
  }

  prepResultDataAndSaveInService(data: any[]): any {
    var userTrivia = {
      userTriviaId: this.triviaId,
      name: "T1",
      userId: 5,
      questions: data
    };

    this.webService.saveUserTrivia(userTrivia).subscribe(rData => console.log(rData));
  }

  saveFormData(formData: any): void {
    formData.id = this.configQQ.id;
    this.dataSaver.push(formData);
    //console.log(this.dataSaver);
  }

  nextBtnText(): string {
    if (this.hasMoreQuestions()) {
      return "Next";
    }
    return "Submit";
  }

  getNextQuestion(): Question {
    let q = null;
    if (this.hasMoreQuestions()) {
      q = this.triviaService.dummyData()[this.triviaId].questions[this.nextQuestionArrId];
      this.nextQuestionArrId++;
    }
    return q;
  }

  getQuestionArrLength(): number {
    return this.triviaService.dummyData()[this.triviaId].questions.length;
  }

  hasMoreQuestions(): boolean {
    return this.questionArrLength - 1 >= this.nextQuestionArrId ? true : false;
  }

}
