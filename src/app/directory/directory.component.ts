import { Component } from '@angular/core';


@Component ({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent{
  festivals: any;
  constructor() {
 }
 getFestivalsData(festivals){
   this.festivals = festivals
 }
}
