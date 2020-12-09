import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public results: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTopWebDesigns().subscribe((data: any)=>{
      console.log(data);
   this.results = data['results'];
    });  
  }
  title = 'firt-page';
}

