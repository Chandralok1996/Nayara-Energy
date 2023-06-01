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
  selector: 'app-otl',
  templateUrl: './otl.component.html',
  styleUrls: ['./otl.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OtlComponent implements OnInit {
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
  OTLmaincount1:any;
  //route oil
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;

  //route township
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;
  //route labour colony
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
  //Oil Club
  OilVISITOR: MatTableDataSource<rfdetail>;
  OilLMV: MatTableDataSource<rfdetail>;
  OilEMPLOYEE: MatTableDataSource<rfdetail>;
  OilHMV: MatTableDataSource<rfdetail>;
  OilTEMPWORKER: MatTableDataSource<rfdetail>;
  OilTEMPVEHICLE: MatTableDataSource<rfdetail>;
  OilCONTRACTUAL: MatTableDataSource<rfdetail>;
  //TC
  TGVISITOR: MatTableDataSource<rfdetail>;
  TGLMV: MatTableDataSource<rfdetail>;
  TGEMPLOYEE: MatTableDataSource<rfdetail>;
  TGHMV: MatTableDataSource<rfdetail>;
  TGTEMPWORKER: MatTableDataSource<rfdetail>;
  TGTEMPVEHICLE: MatTableDataSource<rfdetail>;
  TGCONTRACTUAL: MatTableDataSource<rfdetail>;
 //LBC
  LCGVISITOR: MatTableDataSource<rfdetail>;
  LCGLMV: MatTableDataSource<rfdetail>;
  LCGEMPLOYEE: MatTableDataSource<rfdetail>;
  LCGHMV: MatTableDataSource<rfdetail>;
  LCGTEMPWORKER: MatTableDataSource<rfdetail>;
  LCGTEMPVEHICLE: MatTableDataSource<rfdetail>;
  LCGCONTRACTUAL: MatTableDataSource<rfdetail>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];
  selection = new SelectionModel<rfdetail>(true, []);
  residCount: any;
  codeCount: any;
  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.Resident('OILCLUB','');
  }
//oil 
oilvisitor1(){
  this.visitordata=true;
  let flag2="OILCLUB"
  let code="VIST"
  this.Resident(flag2,code)
}
oilvisitor2(){
this.visitordata=false;
}
oillmv1(){
this.lmvdata=true;
let flag2="OILCLUB"
  let code="LightMotorVehicle"
  this.Resident(flag2,code)
}
oillmv2(){
this.lmvdata=false;
}
oilemployee1(){
this.employeedata=true;
let flag2="OILCLUB"
  let code="EMP"
  this.Resident(flag2,code)
}
oilemployee2(){
this.employeedata=false;
}
oilhmv1(){
this.hmvdata=true;
let flag2="OILCLUB"
  let code="HeavyMotorVehicle"
  this.Resident(flag2,code)
}
oilhmv2(){
this.hmvdata=false;
}
oiltempworker1(){
this.tempworkerdata=true;
let flag2="OILCLUB"
  let code="TEMPPA"
  this.Resident(flag2,code)
}
oiltempworker2(){
this.tempworkerdata=false;
}
oiltempvehicle1(){
this.tempvehicledata=true;
let flag2="OILCLUB"
  let code="TempVehicle"
  this.Resident(flag2,code)
}
oiltempvehicle2(){
this.tempvehicledata=false;
}
oilcontractstaff1(){
this.contractstaffdata=true;
let flag2="OILCLUB"
  let code="CONT"
  this.Resident(flag2,code)
}
oilcontractstaff2(){
this.contractstaffdata=false;
}

back=false;
back1(){
  this.back=true;
  setTimeout(()=>{
    this.back=false;
  },3000)
}
goBack() {
  window.history.back();
}
//town ship
townvisitor1(){
  this.visitordata1=true;
  let flag2="TOWNSHIP"
  let code="VIST"
  this.Resident(flag2,code)
}
townvisitor2(){
this.visitordata1=false;
}
townlmv1(){
this.lmvdata1=true;
let flag2="TOWNSHIP"
  let code="LightMotorVehicle"
  this.Resident(flag2,code)
}
townlmv2(){
this.lmvdata1=false;
}
townemployee1(){
this.employeedata1=true;
let flag2="TOWNSHIP"
  let code="EMP"
  this.Resident(flag2,code)
}
townemployee2(){
this.employeedata1=false;
}
townhmv1(){
this.hmvdata1=true;
let flag2="TOWNSHIP"
  let code="HeavyMotorVehicle"
  this.Resident(flag2,code)
}
townhmv2(){
this.hmvdata1=false;
}
towntempworker1(){
this.tempworkerdata1=true;
let flag2="TOWNSHIP"
  let code="TEMPPA"
  this.Resident(flag2,code)
}
towntempworker2(){
this.tempworkerdata1=false;
}
towntempvehicle1(){
this.tempvehicledata1=true;
let flag2="TOWNSHIP"
  let code="TempVehicle"
  this.Resident(flag2,code)
}
towntempvehicle2(){
this.tempvehicledata1=false;
}
towncontractstaff1(){
this.contractstaffdata1=true;
let flag2="TOWNSHIP"
  let code="CONT"
  this.Resident(flag2,code)
}
towncontractstaff2(){
this.contractstaffdata1=false;
}
//labour
labourvisitor1(){
  this.visitordata2=true;
  let flag2="LBC"
  let code="VIST"
  this.Resident(flag2,code)
}
labourvisitor2(){
this.visitordata2=false;
}
labourlmv1(){
this.lmvdata2=true;
let flag2="LBC"
  let code="LightMotorVehicle"
  this.Resident(flag2,code)
}
labourlmv2(){
this.lmvdata2=false;
}
labouremployee1(){
this.employeedata2=true;
let flag2="LBC"
  let code="EMP"
  this.Resident(flag2,code)
}
labouremployee2(){
this.employeedata2=false;
}
labourhmv1(){
this.hmvdata2=true;
let flag2="LBC"
  let code="HeavyMotorVehicle"
  this.Resident(flag2,code)
}
labourhmv2(){
this.hmvdata2=false;
}
labourtempworker1(){
this.tempworkerdata2=true;
let flag2="LBC"
  let code="TEMPPA"
  this.Resident(flag2,code)
}
labourtempworker2(){
this.tempworkerdata2=false;
}
labourtempvehicle1(){
this.tempvehicledata2=true;
let flag2="LBC"
  let code="TempVehicle"
  this.Resident(flag2,code)
}
labourtempvehicle2(){
this.tempvehicledata2=false;
}
labourcontractstaff1(){
this.contractstaffdata2=true;
let flag2="LBC"
  let code="CONT"
  this.Resident(flag2,code)
}
labourcontractstaff2(){
this.contractstaffdata2=false;
}
    
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5';
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
  this.OilVISITOR.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.OilLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.OilEMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.OilHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.OilTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.OilTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.OilCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.TGVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.TGLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.TGEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.TGHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.TGTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.TGTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.TGCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.LCGVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.LCGLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.LCGEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.LCGHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.LCGTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.LCGTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.LCGCONTRACTUAL.filter = filterValue.trim().toLowerCase();
}



Exportdata1(){
  var ws = XLSX.utils.json_to_sheet(this.data1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club VISITOR.xlsx");
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club LMV REPORT.xlsx");
      }

Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club EMP REPORT.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club HMV REPORT.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club TEMP WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club TEMP VEHICLE.xlsx");
}
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Oil Club Contractual Report.xlsx");
}
Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate LMV REPORT.xlsx");
      }
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate EMP REPORT.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate HMV REPORT.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate TEMP WORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate TEMP VEHICLE.xlsx");
}
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Town Gate Contractual Report.xlsx");
}            
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate VISITOR.xlsx");
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate LMV REPORT.xlsx");
      }
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate EMP REPORT.xlsx");
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate HMV REPORT.xlsx");
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate TEMP WORKER.xlsx");
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate TEMP VEHICLE.xlsx");
}
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Labour Colony Gate Contractual Report.xlsx");                
}

Resident(flag2:any, code:any){
  console.log(flag2,code);
  this.apiservice.residential(flag2, code).subscribe((res:any) => {
   
    //OILCLUB
  
    if(res.result!=null)
    {
      this.OilVISITOR=res.result
      this.OilVISITOR.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.OilLMV=res.result
      this.OilLMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.OilEMPLOYEE=res.result
      this.OilEMPLOYEE.sort = this.sort; 
    } 
   
    if(res.result!=null)
    {
      this.OilHMV=res.result
      this.OilHMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.OilTEMPWORKER=res.result
      this.OilTEMPWORKER.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.OilTEMPVEHICLE=res.result
      this.OilTEMPVEHICLE.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.OilCONTRACTUAL=res.result
      this.OilCONTRACTUAL.sort = this.sort; 
      console.log(this.OilCONTRACTUAL);
      
    } 
    //TG
    if(res.result!=null)
    {
      this.TGVISITOR=res.result
      this.TGVISITOR.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGLMV=res.result
      this.TGLMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGEMPLOYEE=res.result
      this.TGEMPLOYEE.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGHMV=res.result
      this.TGHMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGTEMPWORKER=res.result
      this.TGTEMPWORKER.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGTEMPVEHICLE=res.result
      this.TGTEMPVEHICLE.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.TGCONTRACTUAL=res.result
      this.TGCONTRACTUAL.sort = this.sort; 
    } 
    //LCG
    if(res.result!=null)
    {
      this.LCGVISITOR=res.result
      this.LCGVISITOR.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGLMV=res.result
      this.LCGLMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGEMPLOYEE=res.result
      this.LCGEMPLOYEE.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGHMV=res.result
      this.LCGHMV.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGTEMPWORKER=res.result
      this.LCGTEMPWORKER.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGTEMPVEHICLE=res.result
      this.LCGTEMPVEHICLE.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LCGCONTRACTUAL=res.result
      this.LCGCONTRACTUAL.sort = this.sort; 
    } 
   
    // TabCount & Card Details 
    this.residCount = res.counts;    
    this.codeCount = res.codeCounts;
     console.log(res);
       
  })
}
}
