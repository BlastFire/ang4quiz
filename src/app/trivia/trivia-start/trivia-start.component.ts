import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trivia-start',
  templateUrl: './trivia-start.component.html',
  styleUrls: ['./trivia-start.component.css']
})
export class TriviaStartComponent implements OnInit {

  triviaId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    //this.triviaId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot);


  }

}
