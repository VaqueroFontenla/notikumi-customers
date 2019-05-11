import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input('totalTickets') totalTickets: number;
  @Input('totalExpense') totalExpense: number;
  constructor() {
  }
}
