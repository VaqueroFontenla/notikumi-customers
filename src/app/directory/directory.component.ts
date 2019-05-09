import { Component, OnInit } from '@angular/core';


@Component ({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {

  title = 'Customer Directory';
  festivals: any;
  //response: any;

  constructor() {
 }

 getFestivalsData(festivals){
   this.festivals = festivals
 }

  ngOnInit() {
  }

}
