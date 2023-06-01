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
  selector: 'app-isbl4',
  templateUrl: './isbl4.component.html',
  styleUrls: ['./isbl4.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Isbl4Component implements OnInit {

  isbl4maincount1: any;



  //route NHT
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;

  //route HMU1
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;
  //route HMU2
  visitordata2=false;
  lmvdata2=false;
  employeedata2=false;
  hmvdata2=false;
  tempworkerdata2=false;
  tempvehicledata2=false;
  contractstaffdata2=false;

  //NHT
  NHTVISITOR: MatTableDataSource<rfdetail>;
  NHTLMV: MatTableDataSource<rfdetail>;
  NHTEMPLOYEE: MatTableDataSource<rfdetail>;
  NHTHMV: MatTableDataSource<rfdetail>;
  NHTTEMPWORKER: MatTableDataSource<rfdetail>;
  NHTTEMPVEHICLE: MatTableDataSource<rfdetail>;
  NHTCONTRACTUAL: MatTableDataSource<rfdetail>;

  //HMU1
  HMU1VISITOR: MatTableDataSource<rfdetail>;
  HMU1LMV: MatTableDataSource<rfdetail>;
  HMU1EMPLOYEE: MatTableDataSource<rfdetail>;
  HMU1HMV: MatTableDataSource<rfdetail>;
  HMU1TEMPWORKER: MatTableDataSource<rfdetail>;
  HMU1TEMPVEHICLE: MatTableDataSource<rfdetail>;
  HMU1CONTRACTUAL: MatTableDataSource<rfdetail>;

  //HMU2
  HMU2VISITOR: MatTableDataSource<rfdetail>;
  HMU2LMV: MatTableDataSource<rfdetail>;
  HMU2EMPLOYEE: MatTableDataSource<rfdetail>;
  HMU2HMV: MatTableDataSource<rfdetail>;
  HMU2TEMPWORKER: MatTableDataSource<rfdetail>;
  HMU2TEMPVEHICLE: MatTableDataSource<rfdetail>;
  HMU2CONTRACTUAL: MatTableDataSource<rfdetail>;

  
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
  allUser:vendor[];
  dataSource: MatTableDataSource<vendor>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //displayedColumns: string[] = ['astv_id','vendor_name','vendor_location','actions'];
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];

  selection = new SelectionModel<vendor>(true, []);
  flag3Counts: any;
  ISBL4Count: any;
  codeCount: any;
  
  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }


  ngOnInit(): void {
    this.isbl4Data('ISBL4','NHT','CONT');
  }
  //nht 
nhtvisitor1(){
  this.visitordata=true;
  let flag2="ISBL4"
  let flag3="NHT"
  let code="VIST"
  this.isbl4Data(flag2,flag3,code)
}
nhtvisitor2(){
this.visitordata=false;
}
nhtlmv1(){
this.lmvdata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="LightMotorVehicle"
this.isbl4Data(flag2,flag3,code)
}
nhtlmv2(){
this.lmvdata=false;
}
nhtemployee1(){
this.employeedata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="VIST"
this.isbl4Data(flag2,flag3,code)
}
nhtemployee2(){
this.employeedata=false;
}
nhthmv1(){
this.hmvdata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="VIST"
this.isbl4Data(flag2,flag3,code)
}
nhthmv2(){
this.hmvdata=false;
}
nhttempworker1(){
this.tempworkerdata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="VIST"
this.isbl4Data(flag2,flag3,code)
}
nhttempworker2(){
this.tempworkerdata=false;
}
nhttempvehicle1(){
this.tempvehicledata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="VIST"
this.isbl4Data(flag2,flag3,code)
}
nhttempvehicle2(){
this.tempvehicledata=false;
}
nhtcontractstaff1(){
this.contractstaffdata=true;
let flag2="ISBL4"
let flag3="NHT"
let code="VIST"
this.isbl4Data(flag2,flag3,code)
}
nhtcontractstaff2(){
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
//hmu1

hmu1visitor1(){
  this.visitordata1=true;
  let flag2="ISBL4"
  let flag3="HMU1"
  let code="VIST"
  this.isbl4Data(flag2,flag3,code)
}
hmu1visitor2(){
this.visitordata1=false;
}
hmu1lmv1(){
this.lmvdata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="LightMotorVehicle"
  this.isbl4Data(flag2,flag3,code)
}
hmu1lmv2(){
this.lmvdata1=false;
}
hmu1employee1(){
this.employeedata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="EMP"
  this.isbl4Data(flag2,flag3,code)
}
hmu1employee2(){
this.employeedata1=false;
}
hmu1hmv1(){
this.hmvdata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="HeavyMotorVehicle"
  this.isbl4Data(flag2,flag3,code)
}
hmu1hmv2(){
this.hmvdata1=false;
}
hmu1tempworker1(){
this.tempworkerdata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="TEMPPA"
  this.isbl4Data(flag2,flag3,code)
}
hmu1tempworker2(){
this.tempworkerdata1=false;
}
hmu1tempvehicle1(){
this.tempvehicledata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="TempVehicle"
  this.isbl4Data(flag2,flag3,code)
}
hmu1tempvehicle2(){
this.tempvehicledata1=false;
}
hmu1contractstaff1(){
this.contractstaffdata1=true;
let flag2="ISBL4"
  let flag3="HMU1"
  let code="CONT"
  this.isbl4Data(flag2,flag3,code)
}
hmu1contractstaff2(){
this.contractstaffdata1=false;
}
//hmu2
hmu2visitor1(){
  this.visitordata2=true;
  let flag2="ISBL4"
  let flag3="HMU2"
  let code="VIST"
  this.isbl4Data(flag2,flag3,code)
}
hmu2visitor2(){
this.visitordata2=false;
}
hmu2lmv1(){
this.lmvdata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="LightMotorVehicle"
this.isbl4Data(flag2,flag3,code)
}
hmu2lmv2(){
this.lmvdata2=false;
}
hmu2employee1(){
this.employeedata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="EMP"
this.isbl4Data(flag2,flag3,code)
}
hmu2employee2(){
this.employeedata2=false;
}
hmu2hmv1(){
this.hmvdata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="HeavyMotorVehicle"
this.isbl4Data(flag2,flag3,code)
}
hmu2hmv2(){
this.hmvdata2=false;
}
hmu2tempworker1(){
this.tempworkerdata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="TEMPPA"
this.isbl4Data(flag2,flag3,code)
}
hmu2tempworker2(){
this.tempworkerdata2=false;
}
hmu2tempvehicle1(){
this.tempvehicledata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="TempVehicle"
this.isbl4Data(flag2,flag3,code)
}
hmu2tempvehicle2(){
this.tempvehicledata2=false;
}
hmu2contractstaff1(){
this.contractstaffdata2=true;
let flag2="ISBL4"
let flag3="HMU2"
let code="CONT"
this.isbl4Data(flag2,flag3,code)
}
hmu2contractstaff2(){
this.contractstaffdata2=false;
}

ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'

}
onRowClicked(row: any) {
  console.log('Row clicked: ', row);  

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

applyFilter0(filterValue: string) {
  this.NHTVISITOR.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.NHTLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.NHTEMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.NHTHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.NHTTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.NHTTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.NHTCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.HMU1VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.HMU1LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.HMU1EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.HMU1HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.HMU1TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.HMU1TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.HMU1CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.HMU2VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.HMU2LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.HMU2EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.HMU2HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.HMU2TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.HMU2TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.HMU2CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}

Exportdata1(){
  var ws = XLSX.utils.json_to_sheet(this.data1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR VISITOR.xlsx");
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR LMV REPORT.xlsx");
      }
Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR EMP REPORT.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR HMV REPORT.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR TEMP WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR TEMP VEHICLE.xlsx");
}
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NHT-CCR Contractual Report.xlsx");
}
Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 LMV REPORT.xlsx");
      }
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 EMP REPORT.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 HMV REPORT.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 TEMP WORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 TEMP VEHICLE.xlsx");
}
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU1 Contractual Report.xlsx");
}            
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 VISITOR.xlsx");
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 LMV REPORT.xlsx");
      }
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 EMP REPORT.xlsx");
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 HMV REPORT.xlsx");
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 TEMP WORKER.xlsx");
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 TEMP VEHICLE.xlsx");
}
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "HMU2 Contractual Report.xlsx");
}
isbl4Data(flag2:any, flag3:any, code:any){
  this.apiservice.plantArea(flag2, flag3, code).subscribe((res:any) => {
     //NHT
     if(res.result!=null)
     {
       this.NHTVISITOR=res.result
       this.NHTVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTLMV=res.result
       this.NHTLMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTEMPLOYEE=res.result
       this.NHTEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTHMV=res.result
       this.NHTHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTTEMPWORKER=res.result
       this.NHTTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTTEMPVEHICLE=res.result
       this.NHTTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.NHTCONTRACTUAL=res.result
       this.NHTCONTRACTUAL.sort = this.sort; 
     } 
     //HMU1
     if(res.result!=null)
     {
       this.HMU1VISITOR=res.result
       this.HMU1VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1LMV=res.result
       this.HMU1LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1EMPLOYEE=res.result
       this.HMU1EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1HMV=res.result
       this.HMU1HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1TEMPWORKER=res.result
       this.HMU1TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1TEMPVEHICLE=res.result
       this.HMU1TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU1CONTRACTUAL=res.result
       this.HMU1CONTRACTUAL.sort = this.sort; 
     } 
     //HMU2
     if(res.result!=null)
     {
       this.HMU2VISITOR=res.result
       this.HMU2VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2LMV=res.result
       this.HMU2LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2EMPLOYEE=res.result
       this.HMU2EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2HMV=res.result
       this.HMU2HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2TEMPWORKER=res.result
       this.HMU2TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2TEMPVEHICLE=res.result
       this.HMU2TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.HMU2CONTRACTUAL=res.result
       this.HMU2CONTRACTUAL.sort = this.sort; 
     } 
    
     // TabCount & Card Details 
     this.flag3Counts = res.flag3Counts;
     this.ISBL4Count = res.counts;    
     this.codeCount = res.codeCounts;
      console.log(res);
        
   })
}




}
