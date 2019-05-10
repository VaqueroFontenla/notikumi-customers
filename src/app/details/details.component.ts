import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Output('submitDet') submitDet: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  showDetails(){
    this.submitDet.emit(event)
  }
}
