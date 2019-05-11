import { Component, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output('getFestivalsData') sendData: EventEmitter<any> = new EventEmitter<any>();
  @Output('getFestivalsTickets') sendTickets: EventEmitter<number> = new EventEmitter<number>();

  festivalName = '' ;
  myControl = new FormControl();
  festivals : any;
  festivalsFiltered : any;
  totalTickets : number;

  constructor(private svc: ServicesService) {
    this.loadFestivals();
   }
  loadFestivals() {
    this.svc.getData()
      .subscribe((festivals)=> {
        this.festivals = festivals
        this.sendData.emit(festivals);
        this.festivalsFiltered = this.removeDuplicates(this.festivals,'festival');
      });
  }
  search(){
    let festivals = this.festivals.filter((festival)=> festival.festival === this.festivalName);
    let totalTickets = festivals.reduce((sum, value) => ( sum + value.tickets ), 0);
    this.sendData.emit(festivals);
    this.sendTickets.emit(totalTickets);
  }
  removeDuplicates(arr, prop){
    let newArr = [];
    let lookup  = {};
    for (let i in arr) {
         lookup[arr[i][prop]] = arr[i];
     }
     for (let i in lookup) {
         newArr.push(lookup[i]);
     }
     return newArr;
  }
}
