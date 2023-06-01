import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginService } from '../nayara/nayralogin/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  date1: string;
  collapsed=true;
 
  requests: any[];
  requests1: any[];
  name:any;
  token:any;

  constructor(public authService: LoginService,public apiservice:ApiService) { }



  ngOnInit(){
    //startTime();
    this.getpdp();
   
    this.token=localStorage.getItem("LoggedInUser");
    console.log( "token1",this.token);
    var str = this.token;
        var shn1 = str.slice(0,1);
        console.log('SRJ',shn1)
        this.name=shn1.toUpperCase();
        console.log('name',this.name);
        

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

// document.getElementById('text').innerHTML = ""+ monthNames[d.getMonth()]
//document.getElementById('text').innerHTML = ""+ monthNames[d.getMonth()]
var d1 = new Date();
  var n = d1.getDay()
  if(n==0){
    document.getElementById("demo").innerHTML = "Sunday"
  }else if(n==1){
    document.getElementById("demo").innerHTML = "Monday"
   }
   else if(n==2){
    document.getElementById("demo").innerHTML = "Tuesday"
   }
   else if(n==3){
    document.getElementById("demo").innerHTML = "Wednesday"
   }
   else if(n==4){
    document.getElementById("demo").innerHTML = "Thursday"
   }
 else if(n==5){
    document.getElementById("demo").innerHTML = "Friday"
   }
   else{
    document.getElementById("demo").innerHTML = "Saturday"
   }
   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth()+1).padStart(2, '0');
   var yyyy=String(today.getFullYear()).padStart(2, '0');

    this.date1 = dd+"."+mm+"."+yyyy;
    console.log(this.date1);
   document.getElementById("demo1").innerHTML =  dd+"."+mm+"."+yyyy;

  }


  getpdp(){
    this.apiservice.getname().subscribe( dataRow => 
      this.requests=[dataRow],error => console.log(error));
      console.log('method data',this.requests[0]);
        this.name=this.requests[0];
      }

      
     
}
