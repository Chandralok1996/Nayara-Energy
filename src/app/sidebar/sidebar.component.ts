import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  token:any;
  
  sidenav1=false;
  
  @Input() tokenname = {name:''};
data:any;


  constructor(private httpClient: HttpClient,public apiservice:ApiService) { }

  ngOnInit(): void {


    setInterval(()=>{
      this.token=localStorage.getItem("LoggedInUser");
    this.tokenname.name=this.token

    this.apiservice.token1(this.tokenname).subscribe((data: {}) => {
      this.data=data[0].usrl_id.toString();
      if(this.data === '3001'){
        
        this.sidenav1=true;
        
      }
      else{
    
        this.sidenav1=false; 
      }
    })
  },35000)

  }

    
    

  
 

}
