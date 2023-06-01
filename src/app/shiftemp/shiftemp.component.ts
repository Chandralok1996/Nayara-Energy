import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit ,ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shiftemp',
  templateUrl: './shiftemp.component.html',
  styleUrls: ['./shiftemp.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ShiftempComponent implements OnInit {

  @ViewChild('shift', { static: false }) private dynamicRef: ElementRef<HTMLElement>;
  get value() {
    return this.dynamicRef.nativeElement.innerHTML;    
  }
  @ViewChild('shift1', { static: false }) private dynamicRef1: ElementRef<HTMLElement>;
  get value1() {
    return this.dynamicRef1.nativeElement.innerHTML;    
  }
  @ViewChild('shift2', { static: false }) private dynamicRef2: ElementRef<HTMLElement>;
  get value2() {
    return this.dynamicRef2.nativeElement.innerHTML;    
  }
  @ViewChild('shift3', { static: false }) private dynamicRef3: ElementRef<HTMLElement>;
  get value3() {
    return this.dynamicRef3.nativeElement.innerHTML;    
  }
  @ViewChild('shift4', { static: false }) private dynamicRef4: ElementRef<HTMLElement>;
  get value4() {
    return this.dynamicRef4.nativeElement.innerHTML;    
  }
  @ViewChild('shift5', { static: false }) private dynamicRef5: ElementRef<HTMLElement>;
  get value5() {
    return this.dynamicRef5.nativeElement.innerHTML;    
  }
  shiftA1='';
  shiftB1='';
  shiftC1='';
  shiftD1='';
  shiftG1='';
  shiftN1='';
 
  shf:any;
  section1=true;
  section2=false;
  section3=false;
  
  time='';
time1='';
@Input() empshiftdetails0  = { ettime: '', sttime: '',shna:''}
@Input() empshiftdetails1  = { ettime: '', sttime: '',shnb:''}
@Input() empshiftdetails2  = { ettime: '', sttime: '',shnc:''}
@Input() empshiftdetails3  = { ettime: '', sttime: '',shnd:''}
@Input() empshiftdetails4  = { ettime: '', sttime: '',shng:''}
@Input() empshiftdetails5  = { ettime: '', sttime: '',shnn:''}
@Input() empshiftstatus0 = {shna:'',shs:'',shn:''};
@Input() empshiftstatus1 = {shnb:'',shs:'',shn:''};
@Input() empshiftstatus2 = {shnc:'',shs:'',shn:''};
@Input() empshiftstatus3 = {shnd:'',shs:'',shn:''};
@Input() empshiftstatus4 = {shng:'',shs:'',shn:''};
@Input() empshiftstatus5 = {shnn:'',shs:'',shn:''};
  
  
  


  constructor(private httpClient: HttpClient,public apiservice:ApiService,private router: Router ) { }

  ngOnInit(): void {

    // let shiftA2 = this.httpClient.get("http://172.16.16.5:3000/shift");
    // shiftA2.subscribe((shiftA3)=>this.shiftA1=shiftA3);
    setInterval(()=>{
    this.apiservice.contshift().subscribe(data =>{  
     
this.shiftA1 = data[0].sttime + ' : ' + data[0].ettime;
this.shiftB1 = data[1].sttime + ' : ' + data[1].ettime;
this.shiftC1 = data[2].sttime + ' : ' + data[2].ettime;
this.shiftD1 = data[3].sttime + ' : ' + data[3].ettime;
this.shiftG1 = data[4].sttime + ' : ' + data[4].ettime;
this.shiftN1 = data[5].sttime + ' : ' + data[5].ettime;
    });

  },2000)
    
      this.apiservice.contshift().subscribe(data1 =>{  
        console.log(data1)
        console.log( data1[0].ettime);
        console.log(data1[0].sttime);
 
        console.log(data1[1].shs);
      //   window.onload = function(){
  
        
        
  
  for(var i=0;i<=6;i++){
    if(data1[i].shs==="ON"){
      var id = "clickButton" + i;
      console.log(id)
      var button = document.getElementById(id);
      
        button.click();
        // setTimeout(()=>{
        //   button.click();
        // },2000)
  
    }else{
      console.log("")
    }
  
  } 
      });


      

    
  }



  ///contr
  
  addtime() {
    console.log(this.empshiftdetails0);
    var data=this.empshiftdetails0;
    console.log(this.value)
    this.empshiftdetails0.shna=this.value

    this.apiservice.timerange1(this.empshiftdetails0).subscribe((data: {}) => {
      console.log(data);
     
    })
  }
  addtime1() {
    console.log(this.empshiftdetails1);
    var data=this.empshiftdetails1;
    console.log(this.value)
    this.empshiftdetails1.shnb=this.value1

    this.apiservice.timerange1(this.empshiftdetails1).subscribe((data: {}) => {
      console.log(data);
    })
  }

  addtime2() {
    console.log(this.empshiftdetails2);
    var data=this.empshiftdetails2;
    
    console.log(this.value2)
    this.empshiftdetails2.shnc=this.value2

    this.apiservice.timerange1(this.empshiftdetails2).subscribe((data: {}) => {
      console.log(data);
    })
  }
  addtime3() {
    console.log(this.empshiftdetails3);
    var data=this.empshiftdetails3;
    console.log(this.value3)
    this.empshiftdetails3.shnd=this.value3

    this.apiservice.timerange1(this.empshiftdetails3).subscribe((data: {}) => {
      console.log(data);
    })
  }
  addtime4() {
    console.log(this.empshiftdetails4);
    var data=this.empshiftdetails4;
    console.log(this.value4)
    this.empshiftdetails4.shng=this.value4

    this.apiservice.timerange1(this.empshiftdetails4).subscribe((data: {}) => {
      console.log(data);
    })
  }
  addtime5() {
    console.log(this.empshiftdetails5);
    var data=this.empshiftdetails5;
    console.log(this.value5)
    this.empshiftdetails5.shnn=this.value5

    this.apiservice.timerange1(this.empshiftdetails5).subscribe((data: {}) => {
      console.log(data);
    })
  }
  addstatus(){
    console.log(this.empshiftstatus0)
    this.empshiftstatus0.shn=this.value
    this.empshiftstatus0.shna=this.value
    this.apiservice.status1(this.empshiftstatus0).subscribe((data: {}) => {
      console.log(data);
    })

  }
  addstatus1(){
    console.log(this.empshiftstatus1)
    this.empshiftstatus1.shn=this.value1
    this.empshiftstatus1.shnb=this.value1
    this.apiservice.status1(this.empshiftstatus1).subscribe((data1: {}) => {
      console.log(data1);
    })

  }
  addstatus2(){
    console.log(this.empshiftstatus2)
    this.empshiftstatus2.shnc=this.value2
    this.empshiftstatus2.shn=this.value2
    this.apiservice.status1(this.empshiftstatus2).subscribe((data2: {}) => {
      console.log(data2);
    })

  }
  addstatus3(){
    console.log(this.empshiftstatus3)
    this.empshiftstatus3.shnd=this.value3
    this.empshiftstatus3.shn=this.value3
    this.apiservice.status1(this.empshiftstatus3).subscribe((data2: {}) => {
      console.log(data2);
    })

  }
  addstatus4(){
    console.log(this.empshiftstatus4)
    this.empshiftstatus4.shng=this.value4
    this.empshiftstatus4.shn=this.value4
    this.apiservice.status1(this.empshiftstatus4).subscribe((data2: {}) => {
      console.log(data2);
    })

  }
  addstatus5(){
    console.log(this.empshiftstatus5)
    this.empshiftstatus5.shnn=this.value5
    this.empshiftstatus5.shn=this.value5
    this.apiservice.status1(this.empshiftstatus5).subscribe((data2: {}) => {
      console.log(data2);
    })

  }
  

 
}
