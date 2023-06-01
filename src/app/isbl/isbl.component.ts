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
  selector: 'app-isbl',
  templateUrl: './isbl.component.html',
  styleUrls: ['./isbl.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IsblComponent implements OnInit, AfterViewInit {
 
  isbl1maincount1:any;
//CDU1Count
  PAisbl1cdu1maincount1:any;
  CDU1visitorcount1: any;
  CDU1empcount1: any;
  CDU1contractualcount1: any;
  CDU1tempworkercount1: any;
  CDU1LMVcount1: any;
  CDU1HMVcount1: any;
  CDU1tempvehiclecount1:any;

  //CDU2Count
  PAisbl1cdu2maincount1:any;
  CDU2visitorcount1: any;
  CDU2empcount1: any;
  CDU2contractualcount1: any;
  CDU2tempworkercount1: any;
  CDU2LMVcount1: any;
  CDU2HMVcount1: any;
  CDU2tempvehiclecount1:any;
//FCCUCount
PAisbl1fccumaincount1:any;
FCCUvisitorcount1: any;
FCCUempcount1: any;
FCCUcontractualcount1: any;
FCCUtempworkercount1: any;
FCCULMVcount1: any;
FCCUHMVcount1: any;
FCCUtempvehiclecount1:any;

//EXPORT

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

  //CDU1
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;
  //CDU 2
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;

   //FCCU/DHDS?SRU
   visitordata2=false;
   lmvdata2=false;
   employeedata2=false;
   hmvdata2=false;
   tempworkerdata2=false;
   tempvehicledata2=false;
   contractstaffdata2=false;

   public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:rfdetail[];
  dataSource: MatTableDataSource<rfdetail>;
  //CDU1
  CDU1VISITOR: MatTableDataSource<rfdetail>;
  CDU1LMV: MatTableDataSource<rfdetail>;
  CDU1EMPLOYEE: MatTableDataSource<rfdetail>;
  CDU1HMV: MatTableDataSource<rfdetail>;
  CDU1TEMPWORKER: MatTableDataSource<rfdetail>;
  CDU1TEMPVEHICLE: MatTableDataSource<rfdetail>;
  CDU1CONTRACTUAL: MatTableDataSource<rfdetail>;
  //CDU2
  CDU2VISITOR: MatTableDataSource<rfdetail>;
  CDU2LMV: MatTableDataSource<rfdetail>;
  CDU2EMPLOYEE: MatTableDataSource<rfdetail>;
  CDU2HMV: MatTableDataSource<rfdetail>;
  CDU2TEMPWORKER: MatTableDataSource<rfdetail>;
  CDU2TEMPVEHICLE: MatTableDataSource<rfdetail>;
  CDU2CONTRACTUAL: MatTableDataSource<rfdetail>;

  //FCCU
  FCCUVISITOR: MatTableDataSource<rfdetail>;
  FCCULMV: MatTableDataSource<rfdetail>;
  FCCUEMPLOYEE: MatTableDataSource<rfdetail>;
  FCCUHMV: MatTableDataSource<rfdetail>;
  FCCUTEMPWORKER: MatTableDataSource<rfdetail>;
  FCCUTEMPVEHICLE: MatTableDataSource<rfdetail>;
  FCCUCONTRACTUAL: MatTableDataSource<rfdetail>;


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];
  selection = new SelectionModel<rfdetail>(true, []);
  ISBL1Count: any;
  codeCount: any;
  flag3Counts: any;

  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.isbl1Data('ISBL1','CDU1','CONT');
  }
//CDU1
  visitor1(){
    this.visitordata=true;
    let flag2="ISBL1"
    let flag3="CDU1"
    let code="VIST"
    this.isbl1Data(flag2,flag3,code)
 }
 visitor2(){
  this.visitordata=false;
}
lmv1(){
  this.lmvdata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="LightMotorVehicle"
  this.isbl1Data(flag2,flag3,code)
}
lmv2(){
this.lmvdata=false;
}
employee1(){
  this.employeedata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="EMP"
  this.isbl1Data(flag2,flag3,code)
}
employee2(){
this.employeedata=false;
}
hmv1(){
  this.hmvdata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="HeavyMotorVehicle"
  this.isbl1Data(flag2,flag3,code)
}
hmv2(){
this.hmvdata=false;
}
tempworker1(){
  this.tempworkerdata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="TEMPPA"
  this.isbl1Data(flag2,flag3,code)
}
tempworker2(){
this.tempworkerdata=false;
}
tempvehicle1(){
  this.tempvehicledata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="TempVehicle"
  this.isbl1Data(flag2,flag3,code)
}
tempvehicle2(){
this.tempvehicledata=false;
}
contractstaff1(){
  this.contractstaffdata=true;
  let flag2="ISBL1"
  let flag3="CDU1"
  let code="CONT"
  this.isbl1Data(flag2,flag3,code)
}
contractstaff2(){
this.contractstaffdata=false;
}
//CDU 2
cdu2visitor1(){
  this.visitordata1=true;
  let flag2="ISBL1"
  let flag3="CDU2"
  let code="VIST"
  this.isbl1Data(flag2,flag3,code)
}
cdu2visitor2(){
this.visitordata1=false;
}
cdu2lmv1(){
this.lmvdata1=true;
let flag2="ISBL1"
let flag3="CDU2"
let code="LightMotorVehicle"
this.isbl1Data(flag2,flag3,code)
}
cdu2lmv2(){
this.lmvdata1=false;
}
cdu2employee1(){
this.employeedata1=true;
let flag2="ISBL1"
  let flag3="CDU2"
  let code="EMP"
  this.isbl1Data(flag2,flag3,code)
}
cdu2employee2(){
this.employeedata1=false;
}

cdu2hmv1(){
this.hmvdata1=true;
let flag2="ISBL1"
let flag3="CDU2"
let code="HeavyMotorVehicle"
this.isbl1Data(flag2,flag3,code)
}
cdu2hmv2(){
this.hmvdata1=false;
}
cdu2tempworker1(){
this.tempworkerdata1=true;
let flag2="ISBL1"
let flag3="CDU2"
let code="TEMPPA"
this.isbl1Data(flag2,flag3,code)
}
cdu2tempworker2(){
this.tempworkerdata1=false;
}
cdu2tempvehicle1(){
this.tempvehicledata1=true;
let flag2="ISBL1"
  let flag3="CDU2"
  let code="TempVehicle"
  this.isbl1Data(flag2,flag3,code)
}
cdu2tempvehicle2(){
this.tempvehicledata1=false;
}
cdu2contractstaff1(){
this.contractstaffdata1=true;
let flag2="ISBL1"
let flag3="CDU2"
let code="CONT"
this.isbl1Data(flag2,flag3,code)
}
cdu2contractstaff2(){
this.contractstaffdata1=false;
}
//FCCU
fccuvisitor1(){
  this.visitordata2=true;
  let flag2="ISBL1"
  let flag3="FCCU"
  let code="VIST"
  this.isbl1Data(flag2,flag3,code)
}
fccuvisitor2(){
this.visitordata2=false;
}
fcculmv1(){
this.lmvdata2=true;
let flag2="ISBL1"
let flag3="FCCU"
let code="LightMotorVehicle"
this.isbl1Data(flag2,flag3,code)
}
fcculmv2(){
this.lmvdata2=false;
}
fccuemployee1(){
this.employeedata2=true;
let flag2="ISBL1"
  let flag3="FCCU"
  let code="EMP"
  this.isbl1Data(flag2,flag3,code)
}
fccuemployee2(){
this.employeedata2=false;
}

fccuhmv1(){
this.hmvdata2=true;
let flag2="ISBL1"
let flag3="FCCU"
let code="HeavyMotorVehicle"
this.isbl1Data(flag2,flag3,code)
}
fccuhmv2(){
this.hmvdata2=false;
}
fccutempworker1(){
this.tempworkerdata2=true;
let flag2="ISBL1"
let flag3="FCCU"
let code="TEMPPA"
this.isbl1Data(flag2,flag3,code)
}
fccutempworker2(){
this.tempworkerdata2=false;
}
fccutempvehicle1(){
this.tempvehicledata2=true;
let flag2="ISBL1"
  let flag3="FCCU"
  let code="TempVehicle"
  this.isbl1Data(flag2,flag3,code)
}
fccutempvehicle2(){
this.tempvehicledata2=false;
}
fccucontractstaff1(){
this.contractstaffdata2=true;
let flag2="ISBL1"
let flag3="FCCU"
let code="CONT"
this.isbl1Data(flag2,flag3,code)
}
fccucontractstaff2(){
this.contractstaffdata2=false;
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
 
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'

}
onRowClicked(row: any) {
  console.log('Row clicked: ', row);  

}

applyFilter0(filterValue: string) {
  this.CDU1VISITOR.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.CDU1LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.CDU1EMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.CDU1HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.CDU1TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.CDU1TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.CDU1CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.CDU2VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.CDU2LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.CDU2EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.CDU2HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.CDU2TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.CDU2TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.CDU2CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.FCCUVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.FCCULMV.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.FCCUEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.FCCUHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.FCCUTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.FCCUTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.FCCUCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}

isAllSelected() {
const numSelected = this.selection.selected.length;
const numRows = this.CDU1VISITOR.data.length;
return numSelected === numRows;
}

masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.CDU1VISITOR.data.forEach(row => this.selection.select(row));
}


  
  isAllSelected1() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
  }
  
  masterToggle1() {
      this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

Exportdata1(){
  var ws = XLSX.utils.json_to_sheet(this.data1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 VISITOR.xlsx");
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 LMV REPORT.xlsx");
      }
Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 EMP REPORT.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 HMV REPORT.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 TEMP WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 TEMP VEHICLE.xlsx");
}
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU1 Contractual Report.xlsx");
}
Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 LMV REPORT.xlsx");
      }
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 EMP REPORT.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 HMV REPORT.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 TEMP WORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 TEMP VEHICLE.xlsx");
}
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CDU2 Contractual Report.xlsx");
}            
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU VISITOR.xlsx");
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU LMV REPORT.xlsx");
      }
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU EMP REPORT.xlsx");
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU HMV REPORT.xlsx");
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU TEMP WORKER.xlsx");
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU TEMP VEHICLE.xlsx");
}
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "FCCU Contractual Report.xlsx");
}

isbl1Data(flag2:any, flag3:any, code:any){
  this.apiservice.plantArea(flag2, flag3, code).subscribe((res:any) => {
     //CDU1
     if(res.result!=null)
     {
       this.CDU1VISITOR=res.result
       this.CDU1VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1LMV=res.result
       this.CDU1LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1EMPLOYEE=res.result
       this.CDU1EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1HMV=res.result
       this.CDU1HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1TEMPWORKER=res.result
       this.CDU1TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1TEMPVEHICLE=res.result
       this.CDU1TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU1CONTRACTUAL=res.result
       this.CDU1CONTRACTUAL.sort = this.sort; 
     } 
     //CDU2
     if(res.result!=null)
     {
       this.CDU2VISITOR=res.result
       this.CDU2VISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2LMV=res.result
       this.CDU2LMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2EMPLOYEE=res.result
       this.CDU2EMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2HMV=res.result
       this.CDU2HMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2TEMPWORKER=res.result
       this.CDU2TEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2TEMPVEHICLE=res.result
       this.CDU2TEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.CDU2CONTRACTUAL=res.result
       this.CDU2CONTRACTUAL.sort = this.sort; 
     } 
     //FCCU
     if(res.result!=null)
     {
       this.FCCUVISITOR=res.result
       this.FCCUVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCULMV=res.result
       this.FCCULMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCUEMPLOYEE=res.result
       this.FCCUEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCUHMV=res.result
       this.FCCUHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCUTEMPWORKER=res.result
       this.FCCUTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCUTEMPVEHICLE=res.result
       this.FCCUTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.FCCUCONTRACTUAL=res.result
       this.FCCUCONTRACTUAL.sort = this.sort; 
     } 
    
     // TabCount & Card Details 
     this.flag3Counts = res.flag3Counts;
     this.ISBL1Count = res.counts;    
     this.codeCount = res.codeCounts;
      console.log(res);
        
   })
}
}