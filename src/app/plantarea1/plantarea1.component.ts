import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-plantarea1',
  templateUrl: './plantarea1.component.html',
  styleUrls: ['./plantarea1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Plantarea1Component implements OnInit {
  
  plantCount: any;
  codeCount: any;

  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.plantData('ISBL1','','');
   
  }


  plantData(flag2:any, flag3:any, code:any){
    this.apiservice.plantArea(flag2, flag3, code).subscribe((res:any) => {
       // TabCount & Card Details 
       this.plantCount = res.counts;    
       this.codeCount = res.codeCounts;
        console.log(res);
          
     })
   }

}
