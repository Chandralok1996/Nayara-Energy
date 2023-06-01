import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { nayuser } from 'src/app/userlist';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  @Input() adduser1={

    username: '',
    password:'',
    OfficeMobile: '',
    userid: '',
    CTGname: '',
    DsgName: '',
    DeptName: '',
    rolename:''
  }
  dropdown=[];
  username: any;
    OfficeMobile: any;
    userid: any;
    ctgcode: any;
    DsgName: any;
    DptName: any;

  employee:nayuser[];
  empSelected:any={};
  constructor(public dialogRef: MatDialogRef<NewuserComponent>,public apiservice:ApiService) { }

  ngOnInit(): void {
setTimeout(()=>{
  this.apiservice.nayarauser().subscribe(data =>{  
    
    this.employee=data;
    console.log(data);

  }); 
},3000)

 

   
    this.apiservice.usrl().subscribe(data1 =>{  
      this.dropdown=data1;
     // console.log(data1);
      
     // this.dataSource.paginator = this.paginator; 
  
    }); 
  }
  onNoClick() {
    this.dialogRef.close();
  }
  
  onEmployeeSelected(val:nayuser){
    this.customFunction(val);
  }
  customFunction(val:nayuser){
    this.username=val.username;
    this.OfficeMobile=val.OfficeMobile;
    this.ctgcode=val.ctgcode;
    this.userid=val.userid;
    this.DsgName=val.DsgName;
    this.DptName=val.DptName
    this.adduser1.username=val.username;
    this.adduser1.OfficeMobile=val.OfficeMobile;
    this.adduser1.CTGname=val.ctgcode;
    this.adduser1.userid=val.userid;
    this.adduser1.DsgName=val.DsgName;
    this.adduser1.DeptName=val.DptName

  }
  adduser() {
  
    // this.adduser1.OfficeMobile = this.OfficeMobile=val.OfficeMobile;
    // this.adduser1.ctgcode=this.ctgcode=val.ctgcode;
    // this.adduser1.userid = this.userid=val.userid;
    // this.adduser1.DsgName =this.DsgName=val.DsgName;
    // this.adduser1.DptName = this.DptName=val.DptName

    console.log(this.adduser1);
    this.apiservice.nayaraadduser(this.adduser1).subscribe((data: {}) => {
    alert(data)
    this.onNoClick()
     // console.log(data);
    })
  }
}
