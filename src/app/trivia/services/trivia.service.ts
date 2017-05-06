import { Injectable } from '@angular/core';
import { Trivia } from '../models/trivia.interface';

@Injectable()
export class TriviaService {

  trivia: Trivia[] = [];

  constructor() { }

  triviaValid(): boolean {
    return this.trivia.length > 0;
  }


}
