import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{
  isCollapsed : boolean = false
  customerToOpen: number;
  @Input('festivals') festivals: any;

  constructor() {
   }
  handleSubmitDet (event) {
    this.customerToOpen = event;
    this.isCollapsed = !this.isCollapsed ;
  }
}
