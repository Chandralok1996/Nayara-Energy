import { HttpClient } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit,ViewEncapsulation, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { getAsset, rfdetail, vendor } from 'src/app/userlist';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-isbl3',
  templateUrl: './isbl3.component.html',
  styleUrls: ['./isbl3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Isbl3Component implements OnInit {

  isbl3maincount1:any;
  

   //route dcu
   visitordata=false;
   lmvdata=false;
   employeedata=false;
   hmvdata=false;
   tempworkerdata=false;
   tempvehicledata=false;
   contractstaffdata=false;

   //route sru1
   visitordata1=false;
   lmvdata1=false;
   employeedata1=false;
   hmvdata1=false;
   tempworkerdata1=false;
   tempvehicledata1=false;
   contractstaffdata1=false;
   //route sru2
   visitordata2=false;
   lmvdata2=false;
   employeedata2=false;
   hmvdata2=false;
   tempworkerdata2=false;
   tempvehicledata2=false;
   contractstaffdata2=false;

   //dcu
   DCUVISITOR: MatTableDataSource<rfdetail>;
  DCULMV: MatTableDataSource<rfdetail>;
  DCUEMPLOYEE: MatTableDataSource<rfdetail>;
  DCUHMV: MatTableDataSource<rfdetail>;
  DCUTEMPWORKER: MatTableDataSource<rfdetail>;
  DCUTEMPVEHICLE: MatTableDataSource<rfdetail>;
  DCUCONTRACTUAL: MatTableDataSource<rfdetail>;

  //SRU1
  SRU1VISITOR: MatTableDataSource<rfdetail>;
  SRU1LMV: MatTableDataSource<rfdetail>;
  SRU1EMPLOYEE: MatTableDataSource<rfdetail>;
  SRU1HMV: MatTableDataSource<rfdetail>;
  SRU1TEMPWORKER: MatTableDataSource<rfdetail>;
  SRU1TEMPVEHICLE: MatTableDataSource<rfdetail>;
  SRU1CONTRACTUAL: MatTableDataSource<rfdetail>;

  //SRU2
  SRU2VISITOR: MatTableDataSource<rfdetail>;
  SRU2LMV: MatTableDataSource<rfdetail>;
  SRU2EMPLOYEE: MatTableDataSource<rfdetail>;
  SRU2HMV: MatTableDataSource<rfdetail>;
  SRU2TEMPWORKER: MatTableDataSource<rfdetail>;
  SRU2TEMPVEHICLE: MatTableDataSource<rfdetail>;
  SRU2CONTRACTUAL: MatTableDataSource<rfdetail>;
    
  data1:any;
  data2:any;
  data3:any;
  data4:any;
  data5:any;
  data6:any;
  data7:any;
  data8:any;
  data9:any;
  data10:any;
  data11:any;
  data12:any;
  data13:any;
  data14:any;
  data15:any;
  data16:any;
  data17:any;
  data18:any;
  data19:any;
  data20:any;
  data21:any;
  
    public buttonName:any = 'Show';
    public admin:boolean = false;
    membership:string;
    loginform: FormGroup;
    value:string;
    allUser:rfdetail[];
    dataSource: MatTableDataSource<rfdetail>;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];

    selection = new SelectionModel<rfdetail>(true, []);
  flag3Counts: any;
  ISBL3Count: any;
  codeCount: any;
    constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }
  

  ngOnInit(): void {
    this.isbl3Data('ISBL3','DCU','CONT'); 
  }
 //dcu 
dcuvisitor1(){
  this.visitordata=true;
  let flag2="ISBL3"
  let flag3="DCU"
  let code="VIST"
  this.isbl3Data(flag2,flag3,code)
}
dcuvisitor2(){
this.visitordata=false;
}
dculmv1(){
this.lmvdata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="LightMotorVehicle"
this.isbl3Data(flag2,flag3,code)
}
dculmv2(){
this.lmvdata=false;
}
dcuemployee1(){
this.employeedata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="EMP"
this.isbl3Data(flag2,flag3,code)
}
dcuemployee2(){
this.employeedata=false;
}
dcuhmv1(){
this.hmvdata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="HeavyMotorVehicle"
this.isbl3Data(flag2,flag3,code)
}
dcuhmv2(){
this.hmvdata=false;
}
dcutempworker1(){
this.tempworkerdata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="TEMPPA"
this.isbl3Data(flag2,flag3,code)
}
dcutempworker2(){
this.tempworkerdata=false;
}
dcutempvehicle1(){
this.tempvehicledata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="TempVehicle"
this.isbl3Data(flag2,flag3,code)
}
dcutempvehicle2(){
this.tempvehicledata=false;
}
dcucontractstaff1(){
this.contractstaffdata=true;
let flag2="ISBL3"
let flag3="DCU"
let code="CONT"
this.isbl3Data(flag2,flag3,code)
}
dcucontractstaff2(){
this.contractstaffdata=false;
}

back=false;
back1(){
  this.back=true;
  setTimeout(()=>{
    this.back=false;
  },2000)
}
goBack() {
  window.history.back();
}

//sru1
sru1visitor1(){
  this.visitordata1=true;
  let flag2="ISBL3"
  let flag3="SRU1"
  let code="VIST"
  this.isbl3Data(flag2,flag3,code)
}
sru1visitor2(){
this.visitordata1=false;
}
sru1lmv1(){
this.lmvdata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="LightMotorVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru1lmv2(){
this.lmvdata1=false;
}
sru1employee1(){
this.employeedata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="EMP"
  this.isbl3Data(flag2,flag3,code)
}
sru1employee2(){
this.employeedata1=false;
}
sru1hmv1(){
this.hmvdata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="HeavyMotorVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru1hmv2(){
this.hmvdata1=false;
}
sru1tempworker1(){
this.tempworkerdata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="TEMPPA"
  this.isbl3Data(flag2,flag3,code)
}
sru1tempworker2(){
this.tempworkerdata1=false;
}
sru1tempvehicle1(){
this.tempvehicledata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="TempVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru1tempvehicle2(){
this.tempvehicledata1=false;
}
sru1contractstaff1(){
this.contractstaffdata1=true;
let flag2="ISBL3"
  let flag3="SRU1"
  let code="CONT"
  this.isbl3Data(flag2,flag3,code)
}
sru1contractstaff2(){
this.contractstaffdata1=false;
}

//sru 2

sru2visitor1(){
  this.visitordata2=true;
  let flag2="ISBL3"
  let flag3="SRU2"
  let code="VIST"
  this.isbl3Data(flag2,flag3,code)
}
sru2visitor2(){
this.visitordata2=false;
}
sru2lmv1(){
this.lmvdata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="LightMotorVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru2lmv2(){
this.lmvdata2=false;
}
sru2employee1(){
this.employeedata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="EMP"
  this.isbl3Data(flag2,flag3,code)
}
sru2employee2(){
this.employeedata2=false;
}
sru2hmv1(){
this.hmvdata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="HeavyMotorVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru2hmv2(){
this.hmvdata2=false;
}
sru2tempworker1(){
this.tempworkerdata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="TEMPPA"
  this.isbl3Data(flag2,flag3,code)
}
sru2tempworker2(){
this.tempworkerdata2=false;
}
sru2tempvehicle1(){
this.tempvehicledata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="TempVehicle"
  this.isbl3Data(flag2,flag3,code)
}
sru2tempvehicle2(){
this.tempvehicledata2=false;
}
sru2contractstaff1(){
this.contractstaffdata2=true;
let flag2="ISBL3"
  let flag3="SRU2"
  let code="CONT"
  this.isbl3Data(flag2,flag3,code)
}
sru2contractstaff2(){
this.contractstaffdata2=false;
}

ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'

}
onRowClicked(row: any) {
  console.log('Row clicked: ', row);  

}

applyFilter0(filterValue: string) {
  this.DCUVISITOR.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.DCULMV.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.DCUEMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.DCUHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.DCUTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.DCUTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.DCUCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.SRU1VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.SRU1LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.SRU1EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.SRU1HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.SRU1TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.SRU1TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.SRU1CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.SRU2VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.SRU2LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.SRU2EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.SRU2HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.SRU2TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.SRU2TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.SRU2CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}

isAllSelected() {
const numSelected = this.selection.selected.length;
const numRows = this.dataSource.data.length;
return numSelected === numRows;
}

masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
}

Exportdata1(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data1);
     
       
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
        
        
  XLSX.writeFile(wb, "DCU VISITOR.xlsx");
     
     
}
Exportdata2(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data2);
       
         
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
          
          
  XLSX.writeFile(wb, "DCU LMV REPORT.xlsx");
       
       
      }

Exportdata3(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data3);
         
           
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
            
            
  XLSX.writeFile(wb, "DCU EMP REPORT.xlsx");
         
         
}
Exportdata4(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data4);
           
             
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
              
              
  XLSX.writeFile(wb, "DCU HMV REPORT.xlsx");
           
           
}
Exportdata5(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data5);
             
               
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                
                
  XLSX.writeFile(wb, "DCU TEMP WORKER.xlsx");
             
             
}
Exportdata6(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data6);
               
                 
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                  
                  
  XLSX.writeFile(wb, "DCU TEMP VEHICLE.xlsx");
               
               
}

Exportdata7(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data7);
                 
                   
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                    
                    
  XLSX.writeFile(wb, "DCU Contractual Report.xlsx");
                 
                 
}
              
Exportdata8(){
  // console.log('llll',this.data8);
  var ws = XLSX.utils.json_to_sheet(this.data8);
     
       
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
        
        
  XLSX.writeFile(wb, "SRU1 VISITOR.xlsx");
     
     
}
Exportdata9(){
  // console.log('llll',this.data9);
  var ws = XLSX.utils.json_to_sheet(this.data9);
       
         
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
          
          
  XLSX.writeFile(wb, "SRU1 LMV REPORT.xlsx");
       
       
      }

Exportdata10(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data10);
         
           
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
            
            
  XLSX.writeFile(wb, "SRU1 EMP REPORT.xlsx");
         
         
}
Exportdata11(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data11);
           
             
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
              
              
  XLSX.writeFile(wb, "SRU1 HMV REPORT.xlsx");
           
           
}
Exportdata12(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data12);
             
               
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                
                
  XLSX.writeFile(wb, "SRU1 TEMP WORKER.xlsx");
             
             
}
Exportdata13(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data13);
               
                 
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                  
                  
  XLSX.writeFile(wb, "SRU1 TEMP VEHICLE.xlsx");
               
               
}

Exportdata14(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data14);
                 
                   
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                    
                    
  XLSX.writeFile(wb, "SRU1 Contractual Report.xlsx");
                 
                 
}            
 
Exportdata15(){
  // console.log('llll',this.data8);
  var ws = XLSX.utils.json_to_sheet(this.data15);
     
       
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
        
        
  XLSX.writeFile(wb, "SRU2 VISITOR.xlsx");
     
     
}
Exportdata16(){
  // console.log('llll',this.data9);
  var ws = XLSX.utils.json_to_sheet(this.data16);
       
         
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
          
          
  XLSX.writeFile(wb, "SRU2 LMV REPORT.xlsx");
       
       
      }

Exportdata17(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data17);
         
           
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
            
            
  XLSX.writeFile(wb, "SRU2 EMP REPORT.xlsx");
         
         
}
Exportdata18(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data18);
           
             
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
              
              
  XLSX.writeFile(wb, "SRU2 HMV REPORT.xlsx");
           
           
}
Exportdata19(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data19);
             
               
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                
                
  XLSX.writeFile(wb, "SRU2 TEMP WORKER.xlsx");
             
             
}
Exportdata20(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data20);
               
                 
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                  
                  
  XLSX.writeFile(wb, "SRU2 TEMP VEHICLE.xlsx");
               
               
}

Exportdata21(){
  console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.data21);
                 
                   
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
                    
                    
  XLSX.writeFile(wb, "SRU2 Contractual Report.xlsx");
                 
                 
}
isbl3Data(flag2:any, flag3:any, code:any){
  this.apiservice.plantArea(flag2, flag3, code).subscribe((res:any) => {
     //DCU
     if(res.result!=null)
     {
       this.DCUVISITOR=res.result
       this.DCUVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCULMV=res.result
       this.DCULMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCUEMPLOYEE=res.result
       this.DCUEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCUHMV=res.result
       this.DCUHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCUTEMPWORKER=res.result
       this.DCUTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCUTEMPVEHICLE=res.result
       this.DCUTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DCUCONTRACTUAL=res.result
       this.DCUCONTRACTUAL.sort = this.sort; 
     } 
     //SRU1
     if(res.result!=null)
     {
       this.SRU1VISITOR=res.result
       this.SRU1VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1LMV=res.result
       this.SRU1LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1EMPLOYEE=res.result
       this.SRU1EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1HMV=res.result
       this.SRU1HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1TEMPWORKER=res.result
       this.SRU1TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1TEMPVEHICLE=res.result
       this.SRU1TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU1CONTRACTUAL=res.result
       this.SRU1CONTRACTUAL.sort = this.sort; 
     } 
     //SRU2
     if(res.result!=null)
     {
       this.SRU2VISITOR=res.result
       this.SRU2VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2LMV=res.result
       this.SRU2LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2EMPLOYEE=res.result
       this.SRU2EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2HMV=res.result
       this.SRU2HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2TEMPWORKER=res.result
       this.SRU2TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2TEMPVEHICLE=res.result
       this.SRU2TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.SRU2CONTRACTUAL=res.result
       this.SRU2CONTRACTUAL.sort = this.sort; 
     } 
    
     // TabCount & Card Details 
     this.flag3Counts = res.flag3Counts;
     this.ISBL3Count = res.counts;    
     this.codeCount = res.codeCounts;
      console.log(res);
        
   })
}


}
