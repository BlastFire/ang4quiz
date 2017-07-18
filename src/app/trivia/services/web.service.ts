import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

  constructor(private http: Http) { }

  saveUserTrivia(body): Observable<string> {
    return this.http.post('http://localhost:9090/api/trivia', body)
      .map((data: Response) => data.json());
  }

}
