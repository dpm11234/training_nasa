import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public date;

  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit() {
    this.date = {
      year: 2015,
      month: 10,
      day: 31
    };
  }

  selectToday() {
    this.date = this.calendar.getToday();
  }

}
