import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';
export interface adduser{
  username: any;
  password: any;
  OfficeMobile: any,
  userid: any,
  CTGname: any,
  DsgName: any,
  DeptName: any,
  rolename:any;
  
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,public apiservice: ApiService) { }

   @Input() userUpdate= {
   username: '',
  password: '',
  OfficeMobile: '',
  userid: '',
  CTGname: '',
  DsgName: '',
  DeptName: '',
  rolename:'',
   }

     user:any;
     ngOnInit(): void {

  



      this.apiservice.getadata().subscribe( dataRow =>
        this.user=[dataRow],error => console.log(error));
        //console.log('method data',this.user);
        this.userUpdate.username=this.user[0].username;
        this.userUpdate.password=this.user[0].password;
        this.userUpdate.OfficeMobile=this.user[0].OfficeMobile;
        this.userUpdate.userid=this.user[0].userid;
        this.userUpdate.CTGname=this.user[0].CTGname;
        this.userUpdate.DsgName=this.user[0].DsgName;
        this.userUpdate.DeptName=this.user[0].DeptName;
        // this.userUpdate.rolename=this.user[0].rolename;
   

      
    
    }
    userupdate(){
   

  
      this.apiservice.nayarauserupdate(this.userUpdate).subscribe(async (data:  {}) => {
       
       // console.log('data',data);
      
   
       window.alert(data);
     this.onNoClick(); 
      
      // await this.router.navigate(["atssuppdp"]); 
       
         
    
        });
  
    }
    onNoClick() {
      this.dialogRef.close();
    }
  
  
  }
  