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
  selector: 'app-isbl2',
  templateUrl: './isbl2.component.html',
  styleUrls: ['./isbl2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Isbl2Component implements OnInit {

  isbl2maincount1:any;
   //route isom
   visitordata=false;
   lmvdata=false;
   employeedata=false;
   hmvdata=false;
   tempworkerdata=false;
   tempvehicledata=false;
   contractstaffdata=false;

   //route vgoht
   visitordata1=false;
   lmvdata1=false;
   employeedata1=false;
   hmvdata1=false;
   tempworkerdata1=false;
   tempvehicledata1=false;
   contractstaffdata1=false;
   //route dhdt
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
  //ISOM
  ISOMVISITOR: MatTableDataSource<rfdetail>;
  ISOMLMV: MatTableDataSource<rfdetail>;
  ISOMEMPLOYEE: MatTableDataSource<rfdetail>;
  ISOMHMV: MatTableDataSource<rfdetail>;
  ISOMTEMPWORKER: MatTableDataSource<rfdetail>;
  ISOMTEMPVEHICLE: MatTableDataSource<rfdetail>;
  ISOMCONTRACTUAL: MatTableDataSource<rfdetail>;
  //VGOHT
  VGOHTVISITOR: MatTableDataSource<rfdetail>;
  VGOHTLMV: MatTableDataSource<rfdetail>;
  VGOHTEMPLOYEE: MatTableDataSource<rfdetail>;
  VGOHTHMV: MatTableDataSource<rfdetail>;
  VGOHTTEMPWORKER: MatTableDataSource<rfdetail>;
  VGOHTTEMPVEHICLE: MatTableDataSource<rfdetail>;
  VGOHTCONTRACTUAL: MatTableDataSource<rfdetail>;
  //DHDT
  DHDTVISITOR: MatTableDataSource<rfdetail>;
  DHDTLMV: MatTableDataSource<rfdetail>;
  DHDTEMPLOYEE: MatTableDataSource<rfdetail>;
  DHDTHMV: MatTableDataSource<rfdetail>;
  DHDTTEMPWORKER: MatTableDataSource<rfdetail>;
  DHDTTEMPVEHICLE: MatTableDataSource<rfdetail>;
  DHDTCONTRACTUAL: MatTableDataSource<rfdetail>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // displayedColumns: string[] = ['astv_id','vendor_name','vendor_location','actions'];
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];

  selection = new SelectionModel<rfdetail>(true, []);

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
flag3Counts: any;
ISBL2Count: any;
codeCount: any;

  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.isbl2Data('ISBL2','ISOM','CONT');
  }


  //isom gate
isomvisitor1(){
  this.visitordata=true;
  let flag2="ISBL2"
  let flag3="ISOM"
  let code="VIST"
  this.isbl2Data(flag2,flag3,code)
}
isomvisitor2(){
this.visitordata=false;
}
isomlmv1(){
this.lmvdata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="LightMotorVehicle"
this.isbl2Data(flag2,flag3,code)
}
isomlmv2(){
this.lmvdata=false;
}
isomemployee1(){
this.employeedata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="EMP"
this.isbl2Data(flag2,flag3,code)
}
isomemployee2(){
this.employeedata=false;
}
isomhmv1(){
this.hmvdata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="HeavyMotorVehicle"
this.isbl2Data(flag2,flag3,code)
}
isomhmv2(){
this.hmvdata=false;
}
isomtempworker1(){
this.tempworkerdata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="TEMPPA"
this.isbl2Data(flag2,flag3,code)
}
isomtempworker2(){
this.tempworkerdata=false;
}
isomtempvehicle1(){
this.tempvehicledata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="TempVehicle"
this.isbl2Data(flag2,flag3,code)
}
isomtempvehicle2(){
this.tempvehicledata=false;
}
isomcontractstaff1(){
this.contractstaffdata=true;
let flag2="ISBL2"
let flag3="ISOM"
let code="CONT"
this.isbl2Data(flag2,flag3,code)
}
isomcontractstaff2(){
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

//vgoht gate
vgvisitor1(){
  this.visitordata1=true;
  let flag2="ISBL2"
  let flag3="VGOH"
  let code="VIST"
  this.isbl2Data(flag2,flag3,code)
}
vgvisitor2(){
this.visitordata1=false;
}
vglmv1(){
this.lmvdata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="LightMotorVehicle"
  this.isbl2Data(flag2,flag3,code)
}
vglmv2(){
this.lmvdata1=false;
}
vgemployee1(){
this.employeedata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="EMP"
  this.isbl2Data(flag2,flag3,code)
}
vgemployee2(){
this.employeedata1=false;
}
vghmv1(){
this.hmvdata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="HeavyMotorVehicle"
  this.isbl2Data(flag2,flag3,code)
}
vghmv2(){
this.hmvdata1=false;
}
vgtempworker1(){
this.tempworkerdata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="TEMPPA"
  this.isbl2Data(flag2,flag3,code)
}
vgtempworker2(){
this.tempworkerdata1=false;
}
vgtempvehicle1(){
this.tempvehicledata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="TempVehicle"
  this.isbl2Data(flag2,flag3,code)
}
vgtempvehicle2(){
this.tempvehicledata1=false;
}
vgcontractstaff1(){
this.contractstaffdata1=true;
let flag2="ISBL2"
  let flag3="VGOH"
  let code="CONT"
  this.isbl2Data(flag2,flag3,code)
}
vgcontractstaff2(){
this.contractstaffdata1=false;
}  

//DHDT

dhvisitor1(){
  this.visitordata2=true;
  let flag2="ISBL2"
  let flag3="DHDT"
  let code="VIST"
  this.isbl2Data(flag2,flag3,code)
}
dhvisitor2(){
this.visitordata2=false;
}
dhlmv1(){
this.lmvdata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="LightMotorVehicle"
this.isbl2Data(flag2,flag3,code)
}
dhlmv2(){
this.lmvdata2=false;
}
dhemployee1(){
this.employeedata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="EMP"
this.isbl2Data(flag2,flag3,code)
}
dhemployee2(){
this.employeedata2=false;
}
dhhmv1(){
this.hmvdata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="HeavyMotorVehicle"
this.isbl2Data(flag2,flag3,code)
}
dhhmv2(){
this.hmvdata2=false;
}
dhtempworker1(){
this.tempworkerdata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="TEMPPA"
this.isbl2Data(flag2,flag3,code)
}
dhtempworker2(){
this.tempworkerdata2=false;
}
dhtempvehicle1(){
this.tempvehicledata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="TempVehicle"
this.isbl2Data(flag2,flag3,code)
}
dhtempvehicle2(){
this.tempvehicledata2=false;
}
dhcontractstaff1(){
this.contractstaffdata2=true;
let flag2="ISBL2"
let flag3="DHDT"
let code="CONT"
this.isbl2Data(flag2,flag3,code)
}
dhcontractstaff2(){
this.contractstaffdata2=false;
}
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'

}
onRowClicked(row: any) {
  console.log('Row clicked: ', row);  

}

applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();
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
  this.ISOMVISITOR.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.ISOMLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.ISOMEMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.ISOMHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.ISOMTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.ISOMTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.ISOMCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.VGOHTVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.VGOHTLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.VGOHTEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.VGOHTHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.VGOHTTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.VGOHTTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.VGOHTCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.DHDTVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.DHDTLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.DHDTEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.DHDTHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.DHDTTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.DHDTTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.DHDTCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}


Exportdata1(){
  var ws = XLSX.utils.json_to_sheet(this.data1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "ISOM VISITOR.xlsx");
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "ISOM LMV REPORT.xlsx");
}
Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "ISOM EMP REPORT.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "CD1 HMV REPORT.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "ISOM TEMP WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "ISOM TEMP VEHICLE.xlsx");
 }
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "ISOM Contractual Report.xlsx");
}
Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "VGOHT VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "VGOHT LMV REPORT.xlsx");
}
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "VGOHT EMP REPORT.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "VGOHT HMV REPORT.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "VGOHT TEMP WORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "VGOHT TEMP VEHICLE.xlsx");
 }
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "VGOHT Contractual Report.xlsx");
}
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "DHDT VISITOR.xlsx");
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "DHDT LMV REPORT.xlsx");
}
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "DHDT EMP REPORT.xlsx");
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "DHDT HMV REPORT.xlsx");
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
XLSX.writeFile(wb, "DHDT TEMP WORKER.xlsx");
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "DHDT TEMP VEHICLE.xlsx");
 }
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "DHDT Contractual Report.xlsx");
}
isbl2Data(flag2:any, flag3:any, code:any){
  this.apiservice.plantArea(flag2, flag3, code).subscribe((res:any) => {
     //ISOM
     if(res.result!=null)
     {
       this.ISOMVISITOR=res.result
       this.ISOMVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMLMV=res.result
       this.ISOMLMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMEMPLOYEE=res.result
       this.ISOMEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMHMV=res.result
       this.ISOMHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMTEMPWORKER=res.result
       this.ISOMTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMTEMPVEHICLE=res.result
       this.ISOMTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.ISOMCONTRACTUAL=res.result
       this.ISOMCONTRACTUAL.sort = this.sort; 
     } 
     //VGOHT
     if(res.result!=null)
     {
       this.VGOHTVISITOR=res.result
       this.VGOHTVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTLMV=res.result
       this.VGOHTLMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTEMPLOYEE=res.result
       this.VGOHTEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTHMV=res.result
       this.VGOHTHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTTEMPWORKER=res.result
       this.VGOHTTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTTEMPVEHICLE=res.result
       this.VGOHTTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.VGOHTCONTRACTUAL=res.result
       this.VGOHTCONTRACTUAL.sort = this.sort; 
     } 
     //DHDT
     if(res.result!=null)
     {
       this.DHDTVISITOR=res.result
       this.DHDTVISITOR.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTLMV=res.result
       this.DHDTLMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTEMPLOYEE=res.result
       this.DHDTEMPLOYEE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTHMV=res.result
       this.DHDTHMV.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTTEMPWORKER=res.result
       this.DHDTTEMPWORKER.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTTEMPVEHICLE=res.result
       this.DHDTTEMPVEHICLE.sort = this.sort; 
     } 
     if(res.result!=null)
     {
       this.DHDTCONTRACTUAL=res.result
       this.DHDTCONTRACTUAL.sort = this.sort; 
     } 
    
     // TabCount & Card Details 
     this.flag3Counts = res.flag3Counts;
     this.ISBL2Count = res.counts;    
     this.codeCount = res.codeCounts;
      console.log(res);
        
   })
}


}
