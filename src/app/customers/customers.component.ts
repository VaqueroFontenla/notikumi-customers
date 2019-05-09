import { Component, Input} from '@angular/core';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{
  @Input('festivals') festivals: any;

  constructor() {
   }
}
