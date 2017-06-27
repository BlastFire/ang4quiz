import { Injectable } from '@angular/core';

@Injectable()
export class UserResultService {

  userStatistic: {
    userId: number,
    userTriviaId: number,
    userQuestions: [{
      id: number,
      userAnswer: number
    }]
  }[];

  constructor() { }

  addResultToStatistic(obj: any) {
    //var userTrivia = 
    //this.userStatistic.questions = obj;
  }


}
