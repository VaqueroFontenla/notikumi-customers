import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component ({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {

  title = 'Customer Directory';

  constructor() { }

  ngOnInit() {
  }

}
