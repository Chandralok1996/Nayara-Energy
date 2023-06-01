import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingpageComponent implements OnInit {
  landingData: any;
  dashERT: any;
  dashERT1: any;
  dashERT2: any;
  dashERT3: any;
  dashERT4: any;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
this.refineryGate();
  
  }  

  refineryGate(){ 
    this.apiService.dashboard().subscribe((res:any) => {
      this.landingData = res.counts;
      this.dashERT = res.counts.ert[0];
      this.dashERT1 = res.counts.ert[1];
      this.dashERT2 = res.counts.ert[2];
      this.dashERT3 = res.counts.ert[3];
      this.dashERT4 = res.counts.ert[4];
      console.log(this.dashERT);
    })
  }

}
