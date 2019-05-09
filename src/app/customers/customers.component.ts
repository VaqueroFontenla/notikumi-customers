import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input('festivals') festivals: any;
  //@Input('response') response : any;


  constructor() {
   }




  ngOnInit() {

  }

}
