import { Component, ViewChild,OnInit } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { ApiService } from '../api.service';
import { isEmpty } from 'rxjs/operators';


class Employee {
  Id: number;
  Name: string;
  age:any;
}
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  



  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
//emp shift A 
 empshiftARMG:any;
 empshiftAMTG:any;
 empshiftALBG:any;
 empshiftACOT:any;
 empshiftANE:any;
 empshiftAJETTY:any;
 empshiftAtotal:any;

 //emp shift B
 empshiftBRMG:any;
 empshiftBMTG:any;
 empshiftBLBG:any;
 empshiftBCOT:any;
 empshiftBNE:any;
 empshiftBJETTY:any;
 empshiftBtotal:any;
 //emp shift C
 empshiftCRMG:any;
 empshiftCMTG:any;
 empshiftCLBG:any;
 empshiftCCOT:any;
 empshiftCNE:any;
 empshiftCJETTY:any;
 empshiftCtotal:any;

 //emp shift D
 empshiftDRMG:any;
 empshiftDMTG:any;
 empshiftDLBG:any;
 empshiftDCOT:any;
 empshiftDNE:any;
 empshiftDJETTY:any;
 empshiftDtotal:any;

 //emp shift G
 empshiftGRMG:any;
 empshiftGMTG:any;
 empshiftGLBG:any;
 empshiftGCOT:any;
 empshiftGNE:any;
 empshiftGJETTY:any;
 empshiftGtotal:any;

 //emp shift N
 empshiftNRMG:any;
 empshiftNMTG:any;
 empshiftNLBG:any;
 empshiftNCOT:any;
 empshiftNNE:any;
 empshiftNJETTY:any;
 empshiftNtotal:any;

 //total
 empRMGtotal:any;
 empMTGtotal:any;
 empLBGtotal:any;
 empCOTtotal:any;
 empNEtotal:any;
 empJETTYtotal:any;

 empmaintotal:any;
empcoltotal:any;
emprowtotal:any;


//con shift A 
conshiftARMG:any;
conshiftAMTG:any;
conshiftALBG:any;
conshiftACOT:any;
conshiftANE:any;
conshiftAJETTY:any;
conshiftAtotal:any;

//con shift B
conshiftBRMG:any;
conshiftBMTG:any;
conshiftBLBG:any;
conshiftBCOT:any;
conshiftBNE:any;
conshiftBJETTY:any;
conshiftBtotal:any;
//con shift C
conshiftCRMG:any;
conshiftCMTG:any;
conshiftCLBG:any;
conshiftCCOT:any;
conshiftCNE:any;
conshiftCJETTY:any;
conshiftCtotal:any;

//con shift D
conshiftDRMG:any;
conshiftDMTG:any;
conshiftDLBG:any;
conshiftDCOT:any;
conshiftDNE:any;
conshiftDJETTY:any;
conshiftDtotal:any;

//con shift G
conshiftGRMG:any;
conshiftGMTG:any;
conshiftGLBG:any;
conshiftGCOT:any;
conshiftGNE:any;
conshiftGJETTY:any;
conshiftGtotal:any;

//con shift N
conshiftNRMG:any;
conshiftNMTG:any;
conshiftNLBG:any;
conshiftNCOT:any;
conshiftNNE:any;
conshiftNJETTY:any;
conshiftNtotal:any;

//total
conRMGtotal:any;
conMTGtotal:any;
conLBGtotal:any;
conCOTtotal:any;
conNEtotal:any;
conJETTYtotal:any;

conmaintotal:any;
concoltotal:any;
conrowtotal:any;


//lmv shift A 
lmvshiftARMG:any;
lmvshiftAMTG:any;
lmvshiftALBG:any;
lmvshiftACOT:any;
lmvshiftANE:any;
lmvshiftAJETTY:any;
lmvshiftAtotal:any;

//lmv shift B
lmvshiftBRMG:any;
lmvshiftBMTG:any;
lmvshiftBLBG:any;
lmvshiftBCOT:any;
lmvshiftBNE:any;
lmvshiftBJETTY:any;
lmvshiftBtotal:any;
//lmv shift C
lmvshiftCRMG:any;
lmvshiftCMTG:any;
lmvshiftCLBG:any;
lmvshiftCCOT:any;
lmvshiftCNE:any;
lmvshiftCJETTY:any;
lmvshiftCtotal:any;

//lmv shift D
lmvshiftDRMG:any;
lmvshiftDMTG:any;
lmvshiftDLBG:any;
lmvshiftDCOT:any;
lmvshiftDNE:any;
lmvshiftDJETTY:any;
lmvshiftDtotal:any;

//lmv shift G
lmvshiftGRMG:any;
lmvshiftGMTG:any;
lmvshiftGLBG:any;
lmvshiftGCOT:any;
lmvshiftGNE:any;
lmvshiftGJETTY:any;
lmvshiftGtotal:any;

//lmv shift N
lmvshiftNRMG:any;
lmvshiftNMTG:any;
lmvshiftNLBG:any;
lmvshiftNCOT:any;
lmvshiftNNE:any;
lmvshiftNJETTY:any;
lmvshiftNtotal:any;

//total
lmvRMGtotal:any;
lmvMTGtotal:any;
lmvLBGtotal:any;
lmvCOTtotal:any;
lmvNEtotal:any;
lmvJETTYtotal:any;

lmvmaintotal:any;
lmvcoltotal:any;
lmvrowtotal:any;


//hmv shift A 
hmvshiftARMG:any;
hmvshiftAMTG:any;
hmvshiftALBG:any;
hmvshiftACOT:any;
hmvshiftANE:any;
hmvshiftAJETTY:any;
hmvshiftAtotal:any;

//hmv shift B
hmvshiftBRMG:any;
hmvshiftBMTG:any;
hmvshiftBLBG:any;
hmvshiftBCOT:any;
hmvshiftBNE:any;
hmvshiftBJETTY:any;
hmvshiftBtotal:any;
//hmv shift C
hmvshiftCRMG:any;
hmvshiftCMTG:any;
hmvshiftCLBG:any;
hmvshiftCCOT:any;
hmvshiftCNE:any;
hmvshiftCJETTY:any;
hmvshiftCtotal:any;

//hmv shift D
hmvshiftDRMG:any;
hmvshiftDMTG:any;
hmvshiftDLBG:any;
hmvshiftDCOT:any;
hmvshiftDNE:any;
hmvshiftDJETTY:any;
hmvshiftDtotal:any;

//hmv shift G
hmvshiftGRMG:any;
hmvshiftGMTG:any;
hmvshiftGLBG:any;
hmvshiftGCOT:any;
hmvshiftGNE:any;
hmvshiftGJETTY:any;
hmvshiftGtotal:any;

//hmv shift N
hmvshiftNRMG:any;
hmvshiftNMTG:any;
hmvshiftNLBG:any;
hmvshiftNCOT:any;
hmvshiftNNE:any;
hmvshiftNJETTY:any;
hmvshiftNtotal:any;

//total
hmvRMGtotal:any;
hmvMTGtotal:any;
hmvLBGtotal:any;
hmvCOTtotal:any;
hmvNEtotal:any;
hmvJETTYtotal:any;

hmvmaintotal:any;
hmvcoltotal:any;
hmvrowtotal:any;


  constructor(public dialog: MatDialog,public apiservice:ApiService) { }

  ngOnInit(): void {



    this.apiservice.employeeshift().subscribe(data =>{

      //employee
      this.empshiftARMG=data[0].empshiftARMG; 
      this.empshiftAMTG=data[0].empshiftAMTG;
      this.empshiftALBG=data[0].empshiftALBG;
      this.empshiftACOT=data[0].empshiftACOT;
      this.empshiftANE=data[0].empshiftANE;
      this.empshiftAJETTY=data[0].empshiftAJETTY;
      this.empshiftAtotal= this.empshiftARMG + this.empshiftAMTG + this.empshiftALBG +  this.empshiftACOT +  this.empshiftANE +  this.empshiftAJETTY;
     

      this.empshiftBRMG=data[0].empshiftBRMG;
      this.empshiftBMTG=data[0].empshiftBMTG; 
      this.empshiftBLBG=data[0].empshiftBLBG;
      this.empshiftBCOT=data[0].empshiftBCOT;
      this.empshiftBNE=data[0].empshiftBNE;
      this.empshiftBJETTY=data[0].empshiftBJETTY;
      this.empshiftBtotal= this.empshiftBRMG + this.empshiftBMTG + this.empshiftBLBG +  this.empshiftBCOT +  this.empshiftBNE +  this.empshiftBJETTY;
    

      this.empshiftCRMG=data[0].empshiftCRMG; 
      this.empshiftCMTG=data[0].empshiftCMTG;
      this.empshiftCLBG=data[0].empshiftCLBG;
      this.empshiftCCOT=data[0].empshiftCCOT;
      this.empshiftCNE=data[0].empshiftCNE;
      this.empshiftCJETTY=data[0].empshiftCJETTY;
      this.empshiftCtotal= this.empshiftCRMG + this.empshiftCMTG + this.empshiftCLBG +  this.empshiftCCOT +  this.empshiftCNE +  this.empshiftCJETTY;
   

      this.empshiftDRMG=data[0].empshiftDRMG;
      this.empshiftDMTG=data[0].empshiftDMTG; 
      this.empshiftDLBG=data[0].empshiftDLBG;
      this.empshiftDCOT=data[0].empshiftDCOT;
      this.empshiftDNE=data[0].empshiftDNE;
      this.empshiftDJETTY=data[0].empshiftDJETTY;
      this.empshiftDtotal= this.empshiftDRMG + this.empshiftDMTG + this.empshiftDLBG +  this.empshiftDCOT +  this.empshiftDNE +  this.empshiftDJETTY;
     

      this.empshiftGRMG=data[0].empshiftGRMG;
      this.empshiftGMTG=data[0].empshiftGMTG; 
      this.empshiftGLBG=data[0].empshiftGLBG;
      this.empshiftGCOT=data[0].empshiftGCOT;
      this.empshiftGNE=data[0].empshiftGNE;
      this.empshiftGJETTY=data[0].empshiftGJETTY;
      this.empshiftGtotal= this.empshiftGRMG + this.empshiftGMTG + this.empshiftGLBG +  this.empshiftGCOT +  this.empshiftGNE +  this.empshiftGJETTY;
   

      this.empshiftNRMG=data[0].empshiftNRMG;
      this.empshiftNMTG=data[0].empshiftNMTG; 
      this.empshiftNLBG=data[0].empshiftNLBG;
      this.empshiftNCOT=data[0].empshiftNCOT;
      this.empshiftNNE=data[0].empshiftNNE;
      this.empshiftNJETTY=data[0].empshiftNJETTY;
      this.empshiftNtotal= this.empshiftNRMG + this.empshiftNMTG + this.empshiftNLBG +  this.empshiftNCOT +  this.empshiftNNE +  this.empshiftNJETTY;

      this.empRMGtotal= this.empshiftARMG + this.empshiftBRMG + this.empshiftCRMG + this.empshiftDRMG + this.empshiftGRMG + this.empshiftNRMG;
      this.empMTGtotal= this.empshiftAMTG + this.empshiftBMTG + this.empshiftCMTG + this.empshiftDMTG + this.empshiftGMTG + this.empshiftNMTG;
      this.empLBGtotal= this.empshiftALBG + this.empshiftBLBG + this.empshiftCLBG + this.empshiftDLBG + this.empshiftGLBG + this.empshiftNLBG;
      this.empCOTtotal= this.empshiftACOT + this.empshiftBCOT + this.empshiftCCOT + this.empshiftDCOT + this.empshiftGCOT + this.empshiftNCOT;
      this.empNEtotal=  this.empshiftANE + this.empshiftBNE + this.empshiftCNE + this.empshiftDNE + this.empshiftGNE + this.empshiftNNE;
      this.empJETTYtotal= this.empshiftAJETTY + this.empshiftBJETTY + this.empshiftCJETTY + this.empshiftDJETTY + this.empshiftGJETTY + this.empshiftNJETTY;
      
      this.empcoltotal= this.empRMGtotal + this.empMTGtotal + this.empLBGtotal +  this.empCOTtotal + this.empNEtotal + this.empJETTYtotal;
      this.emprowtotal = this.empshiftAtotal + this.empshiftBtotal + this.empshiftCtotal + this.empshiftDtotal + this.empshiftGtotal + this.empshiftNtotal;
     if(this.empcoltotal===this.emprowtotal){
       this.empmaintotal=this.empcoltotal;
       
     }

       });

       this.apiservice.contrshift().subscribe(data =>{
         //conloyee
      this.conshiftARMG=data[0].conshiftARMG; 
      this.conshiftAMTG=data[0].conshiftAMTG;
      this.conshiftALBG=data[0].conshiftALBG;
      this.conshiftACOT=data[0].conshiftACOT;
      this.conshiftANE=data[0].conshiftANE;
      this.conshiftAJETTY=data[0].conshiftAJETTY;
      this.conshiftAtotal= this.conshiftARMG + this.conshiftAMTG + this.conshiftALBG +  this.conshiftACOT +  this.conshiftANE +  this.conshiftAJETTY;
     

      this.conshiftBRMG=data[0].conshiftBRMG;
      this.conshiftBMTG=data[0].conshiftBMTG; 
      this.conshiftBLBG=data[0].conshiftBLBG;
      this.conshiftBCOT=data[0].conshiftBCOT;
      this.conshiftBNE=data[0].conshiftBNE;
      this.conshiftBJETTY=data[0].conshiftBJETTY;
      this.conshiftBtotal= this.conshiftBRMG + this.conshiftBMTG + this.conshiftBLBG +  this.conshiftBCOT +  this.conshiftBNE +  this.conshiftBJETTY;
    

      this.conshiftCRMG=data[0].conshiftCRMG; 
      this.conshiftCMTG=data[0].conshiftCMTG;
      this.conshiftCLBG=data[0].conshiftCLBG;
      this.conshiftCCOT=data[0].conshiftCCOT;
      this.conshiftCNE=data[0].conshiftCNE;
      this.conshiftCJETTY=data[0].conshiftCJETTY;
      this.conshiftCtotal= this.conshiftCRMG + this.conshiftCMTG + this.conshiftCLBG +  this.conshiftCCOT +  this.conshiftCNE +  this.conshiftCJETTY;
   

      this.conshiftDRMG=data[0].conshiftDRMG;
      this.conshiftDMTG=data[0].conshiftDMTG; 
      this.conshiftDLBG=data[0].conshiftDLBG;
      this.conshiftDCOT=data[0].conshiftDCOT;
      this.conshiftDNE=data[0].conshiftDNE;
      this.conshiftDJETTY=data[0].conshiftDJETTY;
      this.conshiftDtotal= this.conshiftDRMG + this.conshiftDMTG + this.conshiftDLBG +  this.conshiftDCOT +  this.conshiftDNE +  this.conshiftDJETTY;
     

      this.conshiftGRMG=data[0].conshiftGRMG;
      this.conshiftGMTG=data[0].conshiftGMTG; 
      this.conshiftGLBG=data[0].conshiftGLBG;
      this.conshiftGCOT=data[0].conshiftGCOT;
      this.conshiftGNE=data[0].conshiftGNE;
      this.conshiftGJETTY=data[0].conshiftGJETTY;
      this.conshiftGtotal= this.conshiftGRMG + this.conshiftGMTG + this.conshiftGLBG +  this.conshiftGCOT +  this.conshiftGNE +  this.conshiftGJETTY;
   

      this.conshiftNRMG=data[0].conshiftNRMG;
      this.conshiftNMTG=data[0].conshiftNMTG; 
      this.conshiftNLBG=data[0].conshiftNLBG;
      this.conshiftNCOT=data[0].conshiftNCOT;
      this.conshiftNNE=data[0].conshiftNNE;
      this.conshiftNJETTY=data[0].conshiftNJETTY;
      this.conshiftNtotal= this.conshiftNRMG + this.conshiftNMTG + this.conshiftNLBG +  this.conshiftNCOT +  this.conshiftNNE +  this.conshiftNJETTY;

      this.conRMGtotal= this.conshiftARMG + this.conshiftBRMG + this.conshiftCRMG + this.conshiftDRMG + this.conshiftGRMG + this.conshiftNRMG;
      this.conMTGtotal= this.conshiftAMTG + this.conshiftBMTG + this.conshiftCMTG + this.conshiftDMTG + this.conshiftGMTG + this.conshiftNMTG;
      this.conLBGtotal= this.conshiftALBG + this.conshiftBLBG + this.conshiftCLBG + this.conshiftDLBG + this.conshiftGLBG + this.conshiftNLBG;
      this.conCOTtotal= this.conshiftACOT + this.conshiftBCOT + this.conshiftCCOT + this.conshiftDCOT + this.conshiftGCOT + this.conshiftNCOT;
      this.conNEtotal=  this.conshiftANE + this.conshiftBNE + this.conshiftCNE + this.conshiftDNE + this.conshiftGNE + this.conshiftNNE;
      this.conJETTYtotal= this.conshiftAJETTY + this.conshiftBJETTY + this.conshiftCJETTY + this.conshiftDJETTY + this.conshiftGJETTY + this.conshiftNJETTY;
      
      this.concoltotal= this.conRMGtotal + this.conMTGtotal + this.conLBGtotal +  this.conCOTtotal + this.conNEtotal + this.conJETTYtotal;
      this.conrowtotal = this.conshiftAtotal + this.conshiftBtotal + this.conshiftCtotal + this.conshiftDtotal + this.conshiftGtotal + this.conshiftNtotal;
     if(this.concoltotal===this.conrowtotal){
       this.conmaintotal=this.concoltotal;
       
     }
});

this.apiservice.lmvshift().subscribe(data =>{

  //lmvloyee
  this.lmvshiftARMG=data[0].lmvshiftARMG; 
  this.lmvshiftAMTG=data[0].lmvshiftAMTG;
  this.lmvshiftALBG=data[0].lmvshiftALBG;
  this.lmvshiftACOT=data[0].lmvshiftACOT;
  this.lmvshiftANE=data[0].lmvshiftANE;
  this.lmvshiftAJETTY=data[0].lmvshiftAJETTY;
  this.lmvshiftAtotal= this.lmvshiftARMG + this.lmvshiftAMTG + this.lmvshiftALBG +  this.lmvshiftACOT +  this.lmvshiftANE +  this.lmvshiftAJETTY;
 

  this.lmvshiftBRMG=data[0].lmvshiftBRMG;
  this.lmvshiftBMTG=data[0].lmvshiftBMTG; 
  this.lmvshiftBLBG=data[0].lmvshiftBLBG;
  this.lmvshiftBCOT=data[0].lmvshiftBCOT;
  this.lmvshiftBNE=data[0].lmvshiftBNE;
  this.lmvshiftBJETTY=data[0].lmvshiftBJETTY;
  this.lmvshiftBtotal= this.lmvshiftBRMG + this.lmvshiftBMTG + this.lmvshiftBLBG +  this.lmvshiftBCOT +  this.lmvshiftBNE +  this.lmvshiftBJETTY;


  this.lmvshiftCRMG=data[0].lmvshiftCRMG; 
  this.lmvshiftCMTG=data[0].lmvshiftCMTG;
  this.lmvshiftCLBG=data[0].lmvshiftCLBG;
  this.lmvshiftCCOT=data[0].lmvshiftCCOT;
  this.lmvshiftCNE=data[0].lmvshiftCNE;
  this.lmvshiftCJETTY=data[0].lmvshiftCJETTY;
  this.lmvshiftCtotal= this.lmvshiftCRMG + this.lmvshiftCMTG + this.lmvshiftCLBG +  this.lmvshiftCCOT +  this.lmvshiftCNE +  this.lmvshiftCJETTY;


  this.lmvshiftDRMG=data[0].lmvshiftDRMG;
  this.lmvshiftDMTG=data[0].lmvshiftDMTG; 
  this.lmvshiftDLBG=data[0].lmvshiftDLBG;
  this.lmvshiftDCOT=data[0].lmvshiftDCOT;
  this.lmvshiftDNE=data[0].lmvshiftDNE;
  this.lmvshiftDJETTY=data[0].lmvshiftDJETTY;
  this.lmvshiftDtotal= this.lmvshiftDRMG + this.lmvshiftDMTG + this.lmvshiftDLBG +  this.lmvshiftDCOT +  this.lmvshiftDNE +  this.lmvshiftDJETTY;
 

  this.lmvshiftGRMG=data[0].lmvshiftGRMG;
  this.lmvshiftGMTG=data[0].lmvshiftGMTG; 
  this.lmvshiftGLBG=data[0].lmvshiftGLBG;
  this.lmvshiftGCOT=data[0].lmvshiftGCOT;
  this.lmvshiftGNE=data[0].lmvshiftGNE;
  this.lmvshiftGJETTY=data[0].lmvshiftGJETTY;
  this.lmvshiftGtotal= this.lmvshiftGRMG + this.lmvshiftGMTG + this.lmvshiftGLBG +  this.lmvshiftGCOT +  this.lmvshiftGNE +  this.lmvshiftGJETTY;


  this.lmvshiftNRMG=data[0].lmvshiftNRMG;
  this.lmvshiftNMTG=data[0].lmvshiftNMTG; 
  this.lmvshiftNLBG=data[0].lmvshiftNLBG;
  this.lmvshiftNCOT=data[0].lmvshiftNCOT;
  this.lmvshiftNNE=data[0].lmvshiftNNE;
  this.lmvshiftNJETTY=data[0].lmvshiftNJETTY;
  this.lmvshiftNtotal= this.lmvshiftNRMG + this.lmvshiftNMTG + this.lmvshiftNLBG +  this.lmvshiftNCOT +  this.lmvshiftNNE +  this.lmvshiftNJETTY;

  this.lmvRMGtotal= this.lmvshiftARMG + this.lmvshiftBRMG + this.lmvshiftCRMG + this.lmvshiftDRMG + this.lmvshiftGRMG + this.lmvshiftNRMG;
  this.lmvMTGtotal= this.lmvshiftAMTG + this.lmvshiftBMTG + this.lmvshiftCMTG + this.lmvshiftDMTG + this.lmvshiftGMTG + this.lmvshiftNMTG;
  this.lmvLBGtotal= this.lmvshiftALBG + this.lmvshiftBLBG + this.lmvshiftCLBG + this.lmvshiftDLBG + this.lmvshiftGLBG + this.lmvshiftNLBG;
  this.lmvCOTtotal= this.lmvshiftACOT + this.lmvshiftBCOT + this.lmvshiftCCOT + this.lmvshiftDCOT + this.lmvshiftGCOT + this.lmvshiftNCOT;
  this.lmvNEtotal=  this.lmvshiftANE + this.lmvshiftBNE + this.lmvshiftCNE + this.lmvshiftDNE + this.lmvshiftGNE + this.lmvshiftNNE;
  this.lmvJETTYtotal= this.lmvshiftAJETTY + this.lmvshiftBJETTY + this.lmvshiftCJETTY + this.lmvshiftDJETTY + this.lmvshiftGJETTY + this.lmvshiftNJETTY;
  
  this.lmvcoltotal= this.lmvRMGtotal + this.lmvMTGtotal + this.lmvLBGtotal +  this.lmvCOTtotal + this.lmvNEtotal + this.lmvJETTYtotal;
  this.lmvrowtotal = this.lmvshiftAtotal + this.lmvshiftBtotal + this.lmvshiftCtotal + this.lmvshiftDtotal + this.lmvshiftGtotal + this.lmvshiftNtotal;
 if(this.lmvcoltotal===this.lmvrowtotal){
   this.lmvmaintotal=this.lmvcoltotal;
   
 }

   });

   this.apiservice.hmvshift().subscribe(data =>{

    //hmvloyee
    this.hmvshiftARMG=data[0].hmvshiftARMG; 
    this.hmvshiftAMTG=data[0].hmvshiftAMTG;
    this.hmvshiftALBG=data[0].hmvshiftALBG;
    this.hmvshiftACOT=data[0].hmvshiftACOT;
    this.hmvshiftANE=data[0].hmvshiftANE;
    this.hmvshiftAJETTY=data[0].hmvshiftAJETTY;
    this.hmvshiftAtotal= this.hmvshiftARMG + this.hmvshiftAMTG + this.hmvshiftALBG +  this.hmvshiftACOT +  this.hmvshiftANE +  this.hmvshiftAJETTY;
   
  
    this.hmvshiftBRMG=data[0].hmvshiftBRMG;
    this.hmvshiftBMTG=data[0].hmvshiftBMTG; 
    this.hmvshiftBLBG=data[0].hmvshiftBLBG;
    this.hmvshiftBCOT=data[0].hmvshiftBCOT;
    this.hmvshiftBNE=data[0].hmvshiftBNE;
    this.hmvshiftBJETTY=data[0].hmvshiftBJETTY;
    this.hmvshiftBtotal= this.hmvshiftBRMG + this.hmvshiftBMTG + this.hmvshiftBLBG +  this.hmvshiftBCOT +  this.hmvshiftBNE +  this.hmvshiftBJETTY;
  
  
    this.hmvshiftCRMG=data[0].hmvshiftCRMG; 
    this.hmvshiftCMTG=data[0].hmvshiftCMTG;
    this.hmvshiftCLBG=data[0].hmvshiftCLBG;
    this.hmvshiftCCOT=data[0].hmvshiftCCOT;
    this.hmvshiftCNE=data[0].hmvshiftCNE;
    this.hmvshiftCJETTY=data[0].hmvshiftCJETTY;
    this.hmvshiftCtotal= this.hmvshiftCRMG + this.hmvshiftCMTG + this.hmvshiftCLBG +  this.hmvshiftCCOT +  this.hmvshiftCNE +  this.hmvshiftCJETTY;
  
  
    this.hmvshiftDRMG=data[0].hmvshiftDRMG;
    this.hmvshiftDMTG=data[0].hmvshiftDMTG; 
    this.hmvshiftDLBG=data[0].hmvshiftDLBG;
    this.hmvshiftDCOT=data[0].hmvshiftDCOT;
    this.hmvshiftDNE=data[0].hmvshiftDNE;
    this.hmvshiftDJETTY=data[0].hmvshiftDJETTY;
    this.hmvshiftDtotal= this.hmvshiftDRMG + this.hmvshiftDMTG + this.hmvshiftDLBG +  this.hmvshiftDCOT +  this.hmvshiftDNE +  this.hmvshiftDJETTY;
   
  
    this.hmvshiftGRMG=data[0].hmvshiftGRMG;
    this.hmvshiftGMTG=data[0].hmvshiftGMTG; 
    this.hmvshiftGLBG=data[0].hmvshiftGLBG;
    this.hmvshiftGCOT=data[0].hmvshiftGCOT;
    this.hmvshiftGNE=data[0].hmvshiftGNE;
    this.hmvshiftGJETTY=data[0].hmvshiftGJETTY;
    this.hmvshiftGtotal= this.hmvshiftGRMG + this.hmvshiftGMTG + this.hmvshiftGLBG +  this.hmvshiftGCOT +  this.hmvshiftGNE +  this.hmvshiftGJETTY;
  
  
    this.hmvshiftNRMG=data[0].hmvshiftNRMG;
    this.hmvshiftNMTG=data[0].hmvshiftNMTG; 
    this.hmvshiftNLBG=data[0].hmvshiftNLBG;
    this.hmvshiftNCOT=data[0].hmvshiftNCOT;
    this.hmvshiftNNE=data[0].hmvshiftNNE;
    this.hmvshiftNJETTY=data[0].hmvshiftNJETTY;
    this.hmvshiftNtotal= this.hmvshiftNRMG + this.hmvshiftNMTG + this.hmvshiftNLBG +  this.hmvshiftNCOT +  this.hmvshiftNNE +  this.hmvshiftNJETTY;
  
    this.hmvRMGtotal= this.hmvshiftARMG + this.hmvshiftBRMG + this.hmvshiftCRMG + this.hmvshiftDRMG + this.hmvshiftGRMG + this.hmvshiftNRMG;
    this.hmvMTGtotal= this.hmvshiftAMTG + this.hmvshiftBMTG + this.hmvshiftCMTG + this.hmvshiftDMTG + this.hmvshiftGMTG + this.hmvshiftNMTG;
    this.hmvLBGtotal= this.hmvshiftALBG + this.hmvshiftBLBG + this.hmvshiftCLBG + this.hmvshiftDLBG + this.hmvshiftGLBG + this.hmvshiftNLBG;
    this.hmvCOTtotal= this.hmvshiftACOT + this.hmvshiftBCOT + this.hmvshiftCCOT + this.hmvshiftDCOT + this.hmvshiftGCOT + this.hmvshiftNCOT;
    this.hmvNEtotal=  this.hmvshiftANE + this.hmvshiftBNE + this.hmvshiftCNE + this.hmvshiftDNE + this.hmvshiftGNE + this.hmvshiftNNE;
    this.hmvJETTYtotal= this.hmvshiftAJETTY + this.hmvshiftBJETTY + this.hmvshiftCJETTY + this.hmvshiftDJETTY + this.hmvshiftGJETTY + this.hmvshiftNJETTY;
    
    this.hmvcoltotal= this.hmvRMGtotal + this.hmvMTGtotal + this.hmvLBGtotal +  this.hmvCOTtotal + this.hmvNEtotal + this.hmvJETTYtotal;
    this.hmvrowtotal = this.hmvshiftAtotal + this.hmvshiftBtotal + this.hmvshiftCtotal + this.hmvshiftDtotal + this.hmvshiftGtotal + this.hmvshiftNtotal;
   if(this.hmvcoltotal===this.hmvrowtotal){
     this.hmvmaintotal=this.hmvcoltotal;
     
   }
  
     });
  



  }


}