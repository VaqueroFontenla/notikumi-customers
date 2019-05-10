import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-description',
  templateUrl: './details-description.component.html',
  styleUrls: ['./details-description.component.css']
})
export class DetailsDescriptionComponent  {
  @Input ('isCollapsed') isCollapsed: boolean;
  @Input('customer') customer: any;
  constructor() {
    console.log(this.customer)
  }
}
