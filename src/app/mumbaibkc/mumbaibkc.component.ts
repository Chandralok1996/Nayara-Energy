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
  selector: 'app-mumbaibkc',
  templateUrl: './mumbaibkc.component.html',
  styleUrls: ['./mumbaibkc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MumbaibkcComponent implements OnInit {
  mumbaibkctotalcount1:any;
  //route zone1
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;

  //route zone2
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;
  //route zone3
  visitordata2=false;
  lmvdata2=false;
  employeedata2=false;
  hmvdata2=false;
  tempworkerdata2=false;
  tempvehicledata2=false;
  contractstaffdata2=false;

  //route zone4
  visitordata3=false;
  lmvdata3=false;
  employeedata3=false;
  hmvdata3=false;
  tempworkerdata3=false;
  tempvehicledata3=false;
  contractstaffdata3=false;

  //Export
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
data22:any;
data23:any;
data24:any;
data25:any;
data26:any;
data27:any;
data28:any;



  public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:rfdetail[];
  dataSource: MatTableDataSource<rfdetail>;
  dataSource1: MatTableDataSource<rfdetail>;
  dataSource2: MatTableDataSource<rfdetail>;
  dataSource3: MatTableDataSource<rfdetail>;
  dataSource4: MatTableDataSource<rfdetail>;
  dataSource5: MatTableDataSource<rfdetail>;
  dataSource6: MatTableDataSource<rfdetail>;
  z2dataSource: MatTableDataSource<rfdetail>;
  z2dataSource1: MatTableDataSource<rfdetail>;
  z2dataSource2: MatTableDataSource<rfdetail>;
  z2dataSource3: MatTableDataSource<rfdetail>;
  z2dataSource4: MatTableDataSource<rfdetail>;
  z2dataSource5: MatTableDataSource<rfdetail>;
  z2dataSource6: MatTableDataSource<rfdetail>;
  Z3dataSource: MatTableDataSource<rfdetail>;
  Z3dataSource1: MatTableDataSource<rfdetail>;
  Z3dataSource2: MatTableDataSource<rfdetail>;
  Z3dataSource3: MatTableDataSource<rfdetail>;
  Z3dataSource4: MatTableDataSource<rfdetail>;
  Z3dataSource5: MatTableDataSource<rfdetail>;
  Z3dataSource6: MatTableDataSource<rfdetail>;
  Z4dataSource: MatTableDataSource<rfdetail>;
  Z4dataSource1: MatTableDataSource<rfdetail>;
  Z4dataSource2: MatTableDataSource<rfdetail>;
  Z4dataSource3: MatTableDataSource<rfdetail>;
  Z4dataSource4: MatTableDataSource<rfdetail>;
  Z4dataSource5: MatTableDataSource<rfdetail>;
  Z4dataSource6: MatTableDataSource<rfdetail>;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];
  selection = new SelectionModel<rfdetail>(true, []);
  mumCount: any;
  codeCount: any;
  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }


  ngOnInit(): void {
    this.MumBKC('ZONE1','');

  }


  zone1visitor1(){
  this.visitordata=true;
  let flag2="ZONE1"
  let code="VIST"
  this.MumBKC(flag2,code)
  }
  zone1visitor2(){
  this.visitordata=false;
  }
  zone1lmv1(){
  this.lmvdata=true;
  let flag2="ZONE1"
  let code="LightMotorVehicle"
  this.MumBKC(flag2,code)
  }
  zone1lmv2(){
  this.lmvdata=false;
  }
  zone1employee1(){
  this.employeedata=true;
  let flag2="ZONE1"
  let code="EMP"
  this.MumBKC(flag2,code)
  }
  zone1employee2(){
  this.employeedata=false;
  }
  zone1hmv1(){
  this.hmvdata=true;
  let flag2="ZONE1"
  let code="HeavyMotorVehicle"
  this.MumBKC(flag2,code)
  }
  zone1hmv2(){
  this.hmvdata=false;
  }
  zone1tempworker1(){
  this.tempworkerdata=true;
  let flag2="ZONE1"
  let code="TEMPPA"
  this.MumBKC(flag2,code)
  }
  zone1tempworker2(){
  this.tempworkerdata=false;
  }
  zone1tempvehicle1(){
  this.tempvehicledata=true;
  let flag2="ZONE1"
  let code="TempVehicle"
  this.MumBKC(flag2,code)
  }
  zone1tempvehicle2(){
  this.tempvehicledata=false;
  }
  zone1contractstaff1(){
  this.contractstaffdata=true;
  let flag2="ZONE1"
  let code="CONT"
  this.MumBKC(flag2,code)
  }
  zone1contractstaff2(){
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


  //zone2
  
zone2visitor1(){
  this.visitordata1=true;
  let flag2="ZONE2"
  let code="VIST"
  this.MumBKC(flag2,code)
}
zone2visitor2(){
this.visitordata1=false;
}
zone2lmv1(){
this.lmvdata1=true;
let flag2="ZONE2"
let code="LightMotorVehicle"
this.MumBKC(flag2,code)
}
zone2lmv2(){
this.lmvdata1=false;
}
zone2employee1(){
this.employeedata1=true;
let flag2="ZONE2"
  let code="EMP"
  this.MumBKC(flag2,code)
}
zone2employee2(){
this.employeedata1=false;
}
zone2hmv1(){
this.hmvdata1=true;
let flag2="ZONE2"
let code="HeavyMotorVehicle"
this.MumBKC(flag2,code)
}
zone2hmv2(){
this.hmvdata1=false;
}
zone2tempworker1(){
this.tempworkerdata1=true;
let flag2="ZONE2"
let code="TEMPPA"
this.MumBKC(flag2,code)
}
zone2tempworker2(){
this.tempworkerdata1=false;
}
zone2tempvehicle1(){
this.tempvehicledata1=true;
let flag2="ZONE2"
let code="TempVehicle"
this.MumBKC(flag2,code)
}
zone2tempvehicle2(){
this.tempvehicledata1=false;
}
zone2contractstaff1(){
this.contractstaffdata1=true;
let flag2="ZONE2"
  let code="CONT"
  this.MumBKC(flag2,code)
}
zone2contractstaff2(){
this.contractstaffdata1=false;
}
//zone 3

zone3visitor1(){
  this.visitordata2=true;
  let flag2="ZONE3"
  let code="VIST"
  this.MumBKC(flag2,code)
}
zone3visitor2(){
this.visitordata2=false;
}
zone3lmv1(){
this.lmvdata2=true;
let flag2="ZONE3"
let code="LightMotorVehicle"
this.MumBKC(flag2,code)
}
zone3lmv2(){
this.lmvdata2=false;
}
zone3employee1(){
this.employeedata2=true;
let flag2="ZONE3"
  let code="EMP"
  this.MumBKC(flag2,code)
}
zone3employee2(){
this.employeedata2=false;
}
zone3hmv1(){
this.hmvdata2=true;
let flag2="ZONE3"
let code="HeavyMotorVehicle"
this.MumBKC(flag2,code)
}
zone3hmv2(){
this.hmvdata2=false;
}
zone3tempworker1(){
this.tempworkerdata2=true;
let flag2="ZONE3"
let code="TEMPPA"
this.MumBKC(flag2,code)
}
zone3tempworker2(){
this.tempworkerdata2=false;
}
zone3tempvehicle1(){
this.tempvehicledata2=true;
let flag2="ZONE3"
let code="TempVehicle"
this.MumBKC(flag2,code)
}
zone3tempvehicle2(){
this.tempvehicledata2=false;
}
zone3contractstaff1(){
this.contractstaffdata2=true;
let flag2="ZONE3"
  let code="CONT"
  this.MumBKC(flag2,code)
}
zone3contractstaff2(){
this.contractstaffdata2=false;
}
//zone 4

zone4visitor1(){
  this.visitordata3=true;
  let flag2="ZONE4"
  let code="VIST"
  this.MumBKC(flag2,code)
}
zone4visitor2(){
this.visitordata3=false;
}
zone4lmv1(){
this.lmvdata3=true;
let flag2="ZONE4"
let code="LightMotorVehicle"
this.MumBKC(flag2,code)
}
zone4lmv2(){
this.lmvdata3=false;
}
zone4employee1(){
this.employeedata3=true;
let flag2="ZONE4"
  let code="EMP"
  this.MumBKC(flag2,code)
}
zone4employee2(){
this.employeedata3=false;
}
zone4hmv1(){
this.hmvdata3=true;
let flag2="ZONE4"
let code="HeavyMotorVehicle"
this.MumBKC(flag2,code)
}
zone4hmv2(){
this.hmvdata3=false;
}
zone4tempworker1(){
this.tempworkerdata3=true;
let flag2="ZONE4"
let code="TEMPPA"
this.MumBKC(flag2,code)
}
zone4tempworker2(){
this.tempworkerdata3=false;
}
zone4tempvehicle1(){
this.tempvehicledata3=true;
let flag2="ZONE4"
let code="TempVehicle"
this.MumBKC(flag2,code)
}
zone4tempvehicle2(){
this.tempvehicledata3=false;
}
zone4contractstaff1(){
this.contractstaffdata3=true;
let flag2="ZONE4"
  let code="CONT"
  this.MumBKC(flag2,code)
}
zone4contractstaff2(){
this.contractstaffdata3=false;
}
  
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5';
}
onRowClicked(row: any) {
  console.log('Row clicked: ', row);  
}

applyFilter0(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
applyFilter1(filterValue: string) {
this.dataSource1.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
applyFilter3(filterValue: string) {
  this.dataSource3.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.dataSource4.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.dataSource5.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.dataSource6.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.z2dataSource.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.z2dataSource1.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.z2dataSource2.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.z2dataSource3.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.z2dataSource4.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.z2dataSource5.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.z2dataSource6.filter = filterValue.trim().toLowerCase();
}
applyFilter14(filterValue: string) {
  this.Z3dataSource.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.Z3dataSource1.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.Z3dataSource2.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.Z3dataSource3.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.Z3dataSource4.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.Z3dataSource5.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.Z3dataSource6.filter = filterValue.trim().toLowerCase();
}
applyFilter21(filterValue: string) {
  this.Z4dataSource.filter = filterValue.trim().toLowerCase();
}
applyFilter22(filterValue: string) {
  this.Z4dataSource1.filter = filterValue.trim().toLowerCase();
}
applyFilter23(filterValue: string) {
  this.Z4dataSource2.filter = filterValue.trim().toLowerCase();
}
applyFilter24(filterValue: string) {
  this.Z4dataSource3.filter = filterValue.trim().toLowerCase();
}
applyFilter25(filterValue: string) {
  this.Z4dataSource4.filter = filterValue.trim().toLowerCase();
}
applyFilter26(filterValue: string) {
  this.Z4dataSource5.filter = filterValue.trim().toLowerCase();
}
applyFilter27(filterValue: string) {
  this.Z4dataSource6.filter = filterValue.trim().toLowerCase();
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
  var ws = XLSX.utils.json_to_sheet(this.data1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  VISITOR.xlsx");
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  LMV REPORT.xlsx");
      }
Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  EMP REPORT.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  HMV REPORT.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  TEMP WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  TEMP VEHICLE.xlsx");
}
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone1 Gate  Contractual Report.xlsx");
}
Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate LMV REPORT.xlsx");
      }
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate EMP REPORT.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate HMV REPORT.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate TEMP WORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate TEMP VEHICLE.xlsx");
}
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone2 Gate Contractual Report.xlsx");
}            
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate VISITOR.xlsx");
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate LMV REPORT.xlsx");
      }
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate EMP REPORT.xlsx");
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate HMV REPORT.xlsx");
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate TEMP WORKER.xlsx");
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3 Gate TEMP VEHICLE.xlsx");
}
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone3Gate Contractual Report.xlsx");
}
Exportdata22(){
  var ws = XLSX.utils.json_to_sheet(this.data22);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Gate VISITOR.xlsx");
}
Exportdata23(){
  var ws = XLSX.utils.json_to_sheet(this.data23);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Gate LMV REPORT.xlsx");
      }
Exportdata24(){
  var ws = XLSX.utils.json_to_sheet(this.data24);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Gate EMP REPORT.xlsx");
}
Exportdata25(){
  var ws = XLSX.utils.json_to_sheet(this.data25);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Gate HMV REPORT.xlsx");
}
Exportdata26(){
  var ws = XLSX.utils.json_to_sheet(this.data26);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Gate TEMP WORKER.xlsx");
}
Exportdata27(){
  var ws = XLSX.utils.json_to_sheet(this.data27);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 TEMP VEHICLE.xlsx");
}
Exportdata28(){
  var ws = XLSX.utils.json_to_sheet(this.data28);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Zone4 Contractual Report.xlsx");
}
MumBKC(flag2:any, code:any){
  console.log(flag2,code);
  this.apiservice.mumbaiBKC(flag2, code).subscribe((res:any) => {
   
    //Zone1
    if(res.result!=null)
    {
      this.dataSource=res.result
      this.dataSource.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource1=res.result
      this.dataSource1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource2=res.result
      this.dataSource2.sort = this.sort; 
      console.log(this.dataSource3);
    } 
    if(res.result!=null)
    {
      this.dataSource3=res.result
      this.dataSource3.sort = this.sort; 
      console.log(this.dataSource3);
    } 
    if(res.result!=null)
    {
      this.dataSource4=res.result
      this.dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource5=res.result
      this.dataSource5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource6=res.result
      this.dataSource6.sort = this.sort; 
    } 
     
    //Zone2
    if(res.result!=null)
    {
      this.z2dataSource=res.result
      this.z2dataSource.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource1=res.result
      this.z2dataSource1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource2=res.result
      this.z2dataSource2.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource3=res.result
      this.z2dataSource3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource4=res.result
      this.z2dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource5=res.result
      this.z2dataSource5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.z2dataSource6=res.result
      this.z2dataSource6.sort = this.sort; 
    } 
   
    //Zone3
    if(res.result!=null)
    {
      this.Z3dataSource=res.result
      this.Z3dataSource.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource1=res.result
      this.Z3dataSource1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource2=res.result
      this.Z3dataSource2.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource3=res.result
      this.Z3dataSource3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource4=res.result
      this.Z3dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource5=res.result
      this.Z3dataSource5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z3dataSource6=res.result
      this.Z3dataSource6.sort = this.sort; 
    } 
    
    //Zone4
    if(res.result!=null)
    {
      this.Z4dataSource=res.result
      this.Z4dataSource.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z4dataSource1=res.result
      this.Z4dataSource1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z4dataSource3=res.result
      this.Z4dataSource3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z4dataSource4=res.result
      this.Z4dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z4dataSource5=res.result
      this.Z4dataSource5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.Z4dataSource6=res.result
      this.Z4dataSource6.sort = this.sort; 
    } 
    // TabCount & Card Details 
    this.mumCount = res.counts;    
    this.codeCount = res.codeCounts;
     console.log(res);
       
  })
}


}
