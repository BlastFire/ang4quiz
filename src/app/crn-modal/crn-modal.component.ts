import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crn-modal',
  templateUrl: './crn-modal.component.html',
  styleUrls: ['./crn-modal.component.css']
})
export class CrnModalComponent implements OnInit {

  @Input() modalOptions: any;
  @Input() modalData: any;
  @Output() fromLeft: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.fromLeft.emit(this.modalData);
  }

}
