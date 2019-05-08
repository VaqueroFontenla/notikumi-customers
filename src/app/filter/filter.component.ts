import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  url = '../../assets/customers.json';

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
  }

  search(){
    let obs = this.http.get(this.url);
    obs.subscribe((response)=> console.log(response))

  }

}
