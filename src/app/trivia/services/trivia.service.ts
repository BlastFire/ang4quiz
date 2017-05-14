import { Injectable } from '@angular/core';
import { Trivia, Question } from '../models/trivia.interface';

@Injectable()
export class TriviaService {

  trivia: Trivia[] = [];
  questions: Question[] = [];

  triviaId: number = 0;
  questionId: number = 0;

  dummyTrivia: Trivia = {
    id: 1,
    triviaName: "triviaName1",
    questions: [
      {
        id: 1,
        name: "question1",
        answers: [
          {
            id: 1,
            answerTitle: "answerTitle1",
            correct: true
          }]
      }
    ]
  };

  dummyTriviaArray: Trivia[] = [];

  constructor() {
    this.dummyTriviaArray.push(this.dummyTrivia);
  }

  nextQuestionId(): number {
    return this.questionId += 1;
  }

  nextTriviaId(): number {
    return this.triviaId += 1;
  }

  questionsValid(): boolean {
    return this.questions.length > 0;
  }

  triviaValid(): boolean {
    return this.trivia.length > 0;
  }

  getTrivia(): Trivia[] {
    return this.trivia;
  }

  questionsLength(): number {
    return this.questions.length;
  }

  triviaLength(): number {
    return this.trivia.length;
  }

  dummyData(): Trivia[] {
    return this.dummyTriviaArray;

  }




}
