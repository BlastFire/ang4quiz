import { Injectable } from '@angular/core';

@Injectable()
export class UserResultService {

  userStatistic: {
    userId: number,
    triviaId: number,
    questions: [{
      id: number,
      userAnswer: number
    }]
  }[];

  constructor() { }

  addResultToStatistic(obj: any) {
    console.log(obj);
  }


}
