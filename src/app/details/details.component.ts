import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isCollapsed : boolean = false
  @Input('customer') customer: any;
  constructor() { }
  showDetails(){
    this.isCollapsed = !this.isCollapsed
  }


  ngOnInit() {
  }

}
