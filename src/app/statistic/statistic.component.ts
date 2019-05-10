import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent  {
  @Input('festivals') festivals: any;

  constructor() {
    // let totalTickets = this.festivals.map((el) => el.tickets)
    // console.log(totalTickets)
  }
}
