import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() customer: any;

  @Output('submitDet') submitDet: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  showDetails() {
    this.submitDet.emit(this.customer);
  }
}
