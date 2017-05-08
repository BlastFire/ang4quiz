import { Injectable } from '@angular/core';
import { Trivia, Question } from '../models/trivia.interface';

@Injectable()
export class TriviaService {

  trivia: Trivia[] = [];
  questions: Question[] = [];

  constructor() { }

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




}
