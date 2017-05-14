import { Component, OnInit } from '@angular/core';
import { TriviaService } from './services/trivia.service';

@Component({
  selector: 'app-trivia-homeinfo',
  templateUrl: './trivia-homeinfo.component.html',
  styleUrls: ['./trivia-homeinfo.component.css']
})
export class TriviaHomeinfoComponent implements OnInit {

  modal: any;

  editName: boolean = false;
  editId: number;

  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    //console.log(this.triviaService.dummyData());
    this.modal = { header: "Delete", body: "Delete trivia ?" };
  }

  saveTriviaName(inputValue: string, trivArrayId: number) {
    //this.triviaService.dummyData()[trivArrayId].triviaName = inputValue;
    this.triviaService.getTrivia()[trivArrayId].triviaName = inputValue;
    this.editName = false;
  }

  fromLeftModal(e: any) {
    //this.triviaService.dummyData().splice(e, 1);
    this.triviaService.getTrivia().splice(e, 1);
    console.log(this.triviaService.getTrivia());
  }

  deleteTrivia(trivArrayId: number) {
    this.editId = trivArrayId;
  }
}
