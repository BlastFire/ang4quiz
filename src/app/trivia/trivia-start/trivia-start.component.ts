import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/trivia.interface';
import { TriviaService } from '../services/trivia.service';
import { UserResultService } from '../services/user-result.service';

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
              private triviaService: TriviaService, private userService: UserResultService) { }

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
      //console.log(this.dataSaver);
      //trivia is over, add the data to user service
      this.prepResultDataAndSaveInService(this.dataSaver);

      //redirect to statistics page
      this.router.navigate(['/statistics']);

    }
  }

  prepResultDataAndSaveInService(data: any[]): void {
    var userTrivia = {
      userTriviaId: this.triviaId,
      userId: 5,
      questions: data
    };
    console.log(userTrivia);

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
    if (this.questionArrLength - 1 >= this.nextQuestionArrId) {
      return true;
    }
    return false;
  }

}
