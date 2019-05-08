import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  response : any;
  isCollapsed : boolean = false

  constructor(private svc: ServicesService) {
   }

  showData () {
    this.svc.getData()
      .subscribe((response)=> {
        this.response = response
        console.log(this.response);
      })
   }
   showDetails(){
     this.isCollapsed = !this.isCollapsed
   }

  ngOnInit() {
    this.showData();

  }

}
