import { HttpClient } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit,ViewEncapsulation, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { getAsset, rfdetail } from 'src/app/userlist';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-ref-gate',
  templateUrl: './ref-gate.component.html',
  styleUrls: ['./ref-gate.component.css']
})
export class RefGateComponent implements OnInit {
//export 
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
bita1:any;
bita2:any;
bita3:any;
bita4:any;
bita5:any;
bita6:any;
bita7:any;
bita8:any;
bita9:any;
bita10:any;
bita11:any;
bita12:any;
bita13:any;
bita14:any;
bita15:any;
bita16:any;
bita17:any;
bita18:any;
bita19:any;
bita20:any;
bita21:any;

//
  refinerygatetotalcount1:any;
  //ref MG
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;
  //material gate
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;

   //labour & cc
   visitordata2=false;
   lmvdata2=false;
   employeedata2=false;
   hmvdata2=false;
   tempworkerdata2=false;
   tempvehicledata2=false;
   contractstaffdata2=false;

   //north east gate
   visitordata3=false;
   lmvdata3=false;
   employeedata3=false;
   hmvdata3=false;
   tempworkerdata3=false;
   tempvehicledata3=false;
   contractstaffdata3=false;
   //BP
   visitordata4=false;
   lmvdata4=false;
   employeedata4=false;
   hmvdata4=false;
   tempworkerdata4=false;
   tempvehicledata4=false;
   contractstaffdata4=false;
   //rail gate
   visitordata5=false;
   lmvdata5=false;
   employeedata5=false;
   hmvdata5=false;
   tempworkerdata5=false;
   tempvehicledata5=false;
   contractstaffdata5=false;


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
  MTG1: MatTableDataSource<rfdetail>;
  MTG2: MatTableDataSource<rfdetail>;
  MTG3: MatTableDataSource<rfdetail>;
  MTG4: MatTableDataSource<rfdetail>;
  MTG5: MatTableDataSource<rfdetail>;
  MTG6: MatTableDataSource<rfdetail>;
  MTG7: MatTableDataSource<rfdetail>;
  LBG1: MatTableDataSource<rfdetail>;
  LBG2: MatTableDataSource<rfdetail>;
  LBG3: MatTableDataSource<rfdetail>;
  LBG4: MatTableDataSource<rfdetail>;
  LBG5: MatTableDataSource<rfdetail>;
  LBG6: MatTableDataSource<rfdetail>;
  LBG7: MatTableDataSource<rfdetail>;
  NEG1: MatTableDataSource<rfdetail>;
  NEG2: MatTableDataSource<rfdetail>;
  NEG3: MatTableDataSource<rfdetail>;
  NEG4: MatTableDataSource<rfdetail>;
  NEG5: MatTableDataSource<rfdetail>;
  NEG6: MatTableDataSource<rfdetail>;
  NEG7: MatTableDataSource<rfdetail>;

  BP93VISITOR: MatTableDataSource<rfdetail>;
  BP93LMV: MatTableDataSource<rfdetail>;
  BP93EMPLOYEE: MatTableDataSource<rfdetail>;
  BP93HMV: MatTableDataSource<rfdetail>;
  BP93TEMPWORKER: MatTableDataSource<rfdetail>;
  BP93TEMPVEHICLE: MatTableDataSource<rfdetail>;
  BP93CONTRACTUAL: MatTableDataSource<rfdetail>;


  //
  RGVISITOR: MatTableDataSource<rfdetail>;
  RGLMV: MatTableDataSource<rfdetail>;
  RGEMPLOYEE: MatTableDataSource<rfdetail>;
  RGHMV: MatTableDataSource<rfdetail>;
  RGTEMPWORKER: MatTableDataSource<rfdetail>;
  RGTEMPVEHICLE: MatTableDataSource<rfdetail>;
  RGCONTRACTUAL: MatTableDataSource<rfdetail>;


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];
  selection = new SelectionModel<rfdetail>(true, []);
  refCount: any;
  codeCount: any;

  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.refineryGate('RMG','');
  }

  visitor1(){
    this.visitordata=true;
    let flag2="RMG"
    let code="VIST"
    this.refineryGate(flag2,code)
 }
 visitor2(){
  this.visitordata=false;
}
lmv1(){
  this.lmvdata=true;
  let flag2="RMG"
  let code="LightMotorVehicle"
  this.refineryGate(flag2,code)
}
lmv2(){
this.lmvdata=false;
}
employee1(){
  this.employeedata=true;
  let flag2="RMG"
  let code="EMP"
  this.refineryGate(flag2,code)
}
employee2(){
this.employeedata=false;
}
hmv1(){
  this.hmvdata=true;
  let flag2="RMG"
  let code="HeavyMotorVehicle"
  this.refineryGate(flag2,code)
}
hmv2(){
this.hmvdata=false;
}
tempworker1(){
  this.tempworkerdata=true;
  let flag2="RMG"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
tempworker2(){
this.tempworkerdata=false;
}
tempvehicle1(){
  this.tempvehicledata=true;
  let flag2="RMG"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
tempvehicle2(){
this.tempvehicledata=false;
}
contractstaff1(){
  this.contractstaffdata=true;
  let flag2="RMG"
  let code="CONT"
  this.refineryGate(flag2,code)
}
contractstaff2(){
this.contractstaffdata=false;
}
//material gate
matvisitor1(){
  this.visitordata1=true;
  let flag2="MTRG"
  let code="VIST"
  this.refineryGate(flag2,code)
}
matvisitor2(){
this.visitordata1=false;
}
matlmv1(){
this.lmvdata1=true;
let flag2="MTRG"
let code="LightMotorVehicle"
this.refineryGate(flag2,code)
}
matlmv2(){
this.lmvdata1=false;
}
matemployee1(){
this.employeedata1=true;
let flag2="MTRG"
let code="EMP"
this.refineryGate(flag2,code)
}
matemployee2(){
this.employeedata1=false;
}

mathmv1(){
this.hmvdata1=true;
let flag2="MTRG"
let code="HeavyMotorVehicle"
this.refineryGate(flag2,code)
}
mathmv2(){
this.hmvdata1=false;
}
mattempworker1(){
this.tempworkerdata1=true;
let flag2="MTRG"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
mattempworker2(){
this.tempworkerdata1=false;
}
mattempvehicle1(){
this.tempvehicledata1=true;
let flag2="MTRG"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
mattempvehicle2(){
this.tempvehicledata1=false;
}
matcontractstaff1(){
this.contractstaffdata1=true;
let flag2="MTRG"
  let code="CONT"
  this.refineryGate(flag2,code)
}
matcontractstaff2(){
this.contractstaffdata1=false;
}
//labour && cc
labvisitor1(){
  this.visitordata2=true;
  let flag2="LBG"
  let code="VIST"
  this.refineryGate(flag2,code)
}
labvisitor2(){
this.visitordata2=false;
}
lablmv1(){
this.lmvdata2=true;
let flag2="LBG"
  let code="LightMotorVehicle"
  this.refineryGate(flag2,code)
}
lablmv2(){
this.lmvdata2=false;
}
labemployee1(){
this.employeedata2=true;
let flag2="LBG"
  let code="EMP"
  this.refineryGate(flag2,code)
}
labemployee2(){
this.employeedata2=false;
}

labhmv1(){
this.hmvdata2=true;
let flag2="LBG"
  let code="HeavyMotorVehicle"
  this.refineryGate(flag2,code)
}
labhmv2(){
this.hmvdata2=false;
}
labtempworker1(){
this.tempworkerdata2=true;
let flag2="LBG"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
labtempworker2(){
this.tempworkerdata2=false;
}
labtempvehicle1(){
this.tempvehicledata2=true;
let flag2="LBG"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
labtempvehicle2(){
this.tempvehicledata2=false;
}
labcontractstaff1(){
this.contractstaffdata2=true;
let flag2="LBG"
  let code="CONT"
  this.refineryGate(flag2,code)
}
labcontractstaff2(){
this.contractstaffdata2=false;
}


//north east
nevisitor1(){
  this.visitordata3=true;
  let flag2="NEG"
  let code="VIST"
  this.refineryGate(flag2,code)
}
nevisitor2(){
this.visitordata3=false;
}
nelmv1(){
this.lmvdata3=true;
let flag2="NEG"
  let code="LightMotorVehicle"
  this.refineryGate(flag2,code)
}
nelmv2(){
this.lmvdata3=false;
}
neemployee1(){
this.employeedata3=true;
let flag2="NEG"
  let code="EMP"
  this.refineryGate(flag2,code)
}
neemployee2(){
this.employeedata3=false;
}

nehmv1(){
this.hmvdata3=true;
let flag2="NEG"
  let code="HeavyMotorVehicle"
  this.refineryGate(flag2,code)
}
nehmv2(){
this.hmvdata3=false;
}
netempworker1(){
this.tempworkerdata3=true;
let flag2="NEG"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
netempworker2(){
this.tempworkerdata3=false;
}
netempvehicle1(){
this.tempvehicledata3=true;
let flag2="NEG"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
netempvehicle2(){
this.tempvehicledata3=false;
}
necontractstaff1(){
this.contractstaffdata3=true;
let flag2="NEG"
  let code="CONT"
  this.refineryGate(flag2,code)
}
necontractstaff2(){
this.contractstaffdata3=false;
}


//BP
bpvisitor1(){
  this.visitordata4=true;
  let flag2="BP93"
  let code="VIST"
  this.refineryGate(flag2,code)
}
bpvisitor2(){
this.visitordata4=false;
}
bplmv1(){
this.lmvdata4=true;
let flag2="BP93"
  let code="LightMotorVehicle"
  this.refineryGate(flag2,code)
}
bplmv2(){
this.lmvdata4=false;
}
bpemployee1(){
this.employeedata4=true;
let flag2="BP93"
  let code="EMP"
  this.refineryGate(flag2,code)
}
bpemployee2(){
this.employeedata4=false;
}
bphmv1(){
this.hmvdata4=true;
let flag2="BP93"
  let code="HeavyMotorVehicle"
  this.refineryGate(flag2,code)
}
bphmv2(){
this.hmvdata4=false;
}
bptempworker1(){
this.tempworkerdata4=true;
let flag2="BP93"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
bptempworker2(){
this.tempworkerdata4=false;
}
bptempvehicle1(){
this.tempvehicledata4=true;
let flag2="BP93"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
bptempvehicle2(){
this.tempvehicledata4=false;
}
bpcontractstaff1(){
this.contractstaffdata4=true;
let flag2="BP93"
  let code="CONT"
  this.refineryGate(flag2,code)
}
bpcontractstaff2(){
this.contractstaffdata4=false;
}


//rail gate
railvisitor1(){
  this.visitordata5=true;
  let flag2="RLG"
  let code="VIST"
  this.refineryGate(flag2,code)
}
railvisitor2(){
this.visitordata5=false;
}
raillmv1(){
this.lmvdata5=true;
let flag2="RLG"
  let code="LightMotorVehicle"
  this.refineryGate(flag2,code)
}
raillmv2(){
this.lmvdata5=false;
}
railemployee1(){
this.employeedata5=true;
let flag2="RLG"
  let code="EMP"
  this.refineryGate(flag2,code)
}
railemployee2(){
this.employeedata5=false;
}
railhmv1(){
this.hmvdata5=true;
let flag2="RLG"
  let code="HeavyMotorVehicle"
  this.refineryGate(flag2,code)
}
railhmv2(){
this.hmvdata5=false;
}
railtempworker1(){
this.tempworkerdata5=true;
let flag2="RLG"
  let code="TEMPPA"
  this.refineryGate(flag2,code)
}
railtempworker2(){
this.tempworkerdata5=false;
}
railtempvehicle1(){
this.tempvehicledata5=true;
let flag2="RLG"
  let code="TempVehicle"
  this.refineryGate(flag2,code)
}
railtempvehicle2(){
this.tempvehicledata5=false;
}
railcontractstaff1(){
this.contractstaffdata5=true;
let flag2="RLG"
  let code="CONT"
  this.refineryGate(flag2,code)
}
railcontractstaff2(){
this.contractstaffdata5=false;
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

Exportdata1(){
  var ws = XLSX.utils.json_to_sheet(this.data1);   
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");     
  XLSX.writeFile(wb, "Ref.maingate VISITOR.xlsx");   
}
Exportdata2(){
  var ws = XLSX.utils.json_to_sheet(this.data2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate LMV.xlsx");
}
Exportdata3(){
  var ws = XLSX.utils.json_to_sheet(this.data3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate EMP.xlsx");
}
Exportdata4(){
  var ws = XLSX.utils.json_to_sheet(this.data4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate HMV.xlsx");
}
Exportdata5(){
  var ws = XLSX.utils.json_to_sheet(this.data5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate TEMP.WORKER.xlsx");
}
Exportdata6(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate TEMP.VEHICLE.xlsx");
}
Exportdata7(){
  var ws = XLSX.utils.json_to_sheet(this.data7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Ref.maingate CONTRACT STAFF.xlsx");
}

Exportdata8(){
  var ws = XLSX.utils.json_to_sheet(this.data8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate VISITOR.xlsx");
}
Exportdata9(){
  var ws = XLSX.utils.json_to_sheet(this.data9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate LMV.xlsx");
}
Exportdata10(){
  var ws = XLSX.utils.json_to_sheet(this.data10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate EMP.xlsx");
}
Exportdata11(){
  var ws = XLSX.utils.json_to_sheet(this.data11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate HMV.xlsx");
}
Exportdata12(){
  var ws = XLSX.utils.json_to_sheet(this.data12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate TEMPWORKER.xlsx");
}
Exportdata13(){
  var ws = XLSX.utils.json_to_sheet(this.data13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate TEMPVEHICLE.xlsx");
}
Exportdata14(){
  var ws = XLSX.utils.json_to_sheet(this.data14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "Materialgate CONTRACT.xlsx");    
}
Exportdata15(){
  var ws = XLSX.utils.json_to_sheet(this.data15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC VISTOR.xlsx");    
}
Exportdata16(){
  var ws = XLSX.utils.json_to_sheet(this.data16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC LMV.xlsx");    
}
Exportdata17(){
  var ws = XLSX.utils.json_to_sheet(this.data17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC EMP.xlsx");    
}
Exportdata18(){
  var ws = XLSX.utils.json_to_sheet(this.data18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC HMV.xlsx");    
}
Exportdata19(){
  var ws = XLSX.utils.json_to_sheet(this.data19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC TEMPEMP.xlsx");    
}
Exportdata20(){
  var ws = XLSX.utils.json_to_sheet(this.data20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC TEMPVEICLE.xlsx");    
}
Exportdata21(){
  var ws = XLSX.utils.json_to_sheet(this.data21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "LABOURCC CONTRACT.xlsx");    
}
Exportdata22(){
  var ws = XLSX.utils.json_to_sheet(this.bita1);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE VISTOR.xlsx");    
}
Exportdata23(){
  var ws = XLSX.utils.json_to_sheet(this.bita2);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE LMV.xlsx");    
}
Exportdata24(){
  var ws = XLSX.utils.json_to_sheet(this.bita3);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE EMP.xlsx");    
}
Exportdata25(){
  var ws = XLSX.utils.json_to_sheet(this.bita4);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE HMV.xlsx");    
}
Exportdata26(){
  var ws = XLSX.utils.json_to_sheet(this.bita5);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE TEMPEMP.xlsx");    
}
Exportdata27(){
  var ws = XLSX.utils.json_to_sheet(this.bita6);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE TEMPVEICLE.xlsx");    
}
Exportdata28(){
  var ws = XLSX.utils.json_to_sheet(this.bita7);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "NE CONTRACT.xlsx");    
}
Exportdata29(){
  var ws = XLSX.utils.json_to_sheet(this.bita8);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 VISTOR.xlsx");    
}
Exportdata30(){
  var ws = XLSX.utils.json_to_sheet(this.bita9);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 LMV.xlsx");    
}
Exportdata31(){
  var ws = XLSX.utils.json_to_sheet(this.bita10);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 EMP.xlsx");    
}
Exportdata32(){
  var ws = XLSX.utils.json_to_sheet(this.bita11);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 HMV.xlsx");    
}
Exportdata33(){
  var ws = XLSX.utils.json_to_sheet(this.bita12);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 TEMPEMP.xlsx");    
}
Exportdata34(){
  var ws = XLSX.utils.json_to_sheet(this.bita13);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 TEMPVEHICLE.xlsx");    
}
Exportdata35(){
  var ws = XLSX.utils.json_to_sheet(this.bita14);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "BP93 CONTRACT.xlsx");    
}

Exportdata36(){
  var ws = XLSX.utils.json_to_sheet(this.bita15);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG VISTOR.xlsx");    
}
Exportdata37(){
  var ws = XLSX.utils.json_to_sheet(this.bita16);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG LMV.xlsx");    
}
Exportdata38(){
  var ws = XLSX.utils.json_to_sheet(this.bita17);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG EMP.xlsx");    
}
Exportdata39(){
  var ws = XLSX.utils.json_to_sheet(this.bita18);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG HMV.xlsx");    
}
Exportdata40(){
  var ws = XLSX.utils.json_to_sheet(this.bita19);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG TEMPEMP.xlsx");    
}
Exportdata41(){
  var ws = XLSX.utils.json_to_sheet(this.bita20);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG TEMPVEHICLE.xlsx");    
}
Exportdata42(){
  var ws = XLSX.utils.json_to_sheet(this.bita21);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");
  XLSX.writeFile(wb, "RG CONTACT.xlsx");    
}

applyFilter0(filterValue: string) {
this.dataSource3.filter = filterValue.trim().toLowerCase();
}
applyFilter1(filterValue: string) {
  this.dataSource2.filter = filterValue.trim().toLowerCase();
}
applyFilter2(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
applyFilter3(filterValue: string) {
  this.dataSource1.filter = filterValue.trim().toLowerCase();
}
applyFilter4(filterValue: string) {
  this.dataSource5.filter = filterValue.trim().toLowerCase();
}
applyFilter5(filterValue: string) {
  this.dataSource6.filter = filterValue.trim().toLowerCase();
}
applyFilter6(filterValue: string) {
  this.dataSource4.filter = filterValue.trim().toLowerCase();
}
applyFilter7(filterValue: string) {
  this.MTG3.filter = filterValue.trim().toLowerCase();
}
applyFilter8(filterValue: string) {
  this.MTG4.filter = filterValue.trim().toLowerCase();
}
applyFilter9(filterValue: string) {
  this.MTG1.filter = filterValue.trim().toLowerCase();
}
applyFilter10(filterValue: string) {
  this.MTG5.filter = filterValue.trim().toLowerCase();
}
applyFilter11(filterValue: string) {
  this.MTG6.filter = filterValue.trim().toLowerCase();
}
applyFilter12(filterValue: string) {
  this.MTG7.filter = filterValue.trim().toLowerCase();
}
applyFilter13(filterValue: string) {
  this.MTG2.filter = filterValue.trim().toLowerCase();
}

applyFilter14(filterValue: string) {
  this.LBG4.filter = filterValue.trim().toLowerCase();
}
applyFilter15(filterValue: string) {
  this.LBG2.filter = filterValue.trim().toLowerCase();
}
applyFilter16(filterValue: string) {
  this.LBG1.filter = filterValue.trim().toLowerCase();
}
applyFilter17(filterValue: string) {
  this.LBG3.filter = filterValue.trim().toLowerCase();
}
applyFilter18(filterValue: string) {
  this.LBG6.filter = filterValue.trim().toLowerCase();
}
applyFilter19(filterValue: string) {
  this.LBG7.filter = filterValue.trim().toLowerCase();
}
applyFilter20(filterValue: string) {
  this.LBG5.filter = filterValue.trim().toLowerCase();
}

applyFilter21(filterValue: string) {
  this.NEG4.filter = filterValue.trim().toLowerCase();
}
applyFilter22(filterValue: string) {
  this.NEG2.filter = filterValue.trim().toLowerCase();
}
applyFilter23(filterValue: string) {
  this.NEG1.filter = filterValue.trim().toLowerCase();
}
applyFilter24(filterValue: string) {
  this.NEG3.filter = filterValue.trim().toLowerCase();
}
applyFilter25(filterValue: string) {
  this.NEG6.filter = filterValue.trim().toLowerCase();
}
applyFilter26(filterValue: string) {
  this.NEG7.filter = filterValue.trim().toLowerCase();
}
applyFilter27(filterValue: string) {
  this.NEG5.filter = filterValue.trim().toLowerCase();
}
applyFilter28(filterValue: string) {
  this.BP93VISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter29(filterValue: string) {
  this.BP93LMV.filter = filterValue.trim().toLowerCase();
}
applyFilter30(filterValue: string) {
  this.BP93EMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter31(filterValue: string) {
  this.BP93HMV.filter = filterValue.trim().toLowerCase();
}
applyFilter32(filterValue: string) {
  this.BP93TEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter33(filterValue: string) {
  this.BP93TEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter34(filterValue: string) {
  this.BP93CONTRACTUAL.filter = filterValue.trim().toLowerCase();
}
applyFilter35(filterValue: string) {
  this.RGVISITOR.filter = filterValue.trim().toLowerCase();
}
applyFilter36(filterValue: string) {
  this.RGLMV.filter = filterValue.trim().toLowerCase();
}
applyFilter37(filterValue: string) {
  this.RGEMPLOYEE.filter = filterValue.trim().toLowerCase();
}
applyFilter38(filterValue: string) {
  this.RGHMV.filter = filterValue.trim().toLowerCase();
}
applyFilter39(filterValue: string) {
  this.RGTEMPWORKER.filter = filterValue.trim().toLowerCase();
}
applyFilter40(filterValue: string) {
  this.RGTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
}
applyFilter41(filterValue: string) {
  this.RGCONTRACTUAL.filter = filterValue.trim().toLowerCase();
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

refineryGate(params1:any, code:any){
  console.log(params1,code);
  
  this.apiservice.refinaryGate(params1, code).subscribe((res:any) => {
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
    } 
    if(res.result!=null)
    {
      this.dataSource3=res.result
      this.dataSource3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource4=res.result
      this.dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource5=res.result
      this.dataSource4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.dataSource6=res.result
      this.dataSource4.sort = this.sort; 
    } 
    //MTG1
    if(res.result!=null)
    {
      this.MTG1=res.result
      this.MTG1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG2=res.result
      this.MTG2.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG3=res.result
      this.MTG3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG4=res.result
      this.MTG4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG5=res.result
      this.MTG5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG6=res.result
      this.MTG6.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.MTG7=res.result
      this.MTG7.sort = this.sort; 
    } 
    //Labour cc
    if(res.result!=null)
    {
      this.LBG1=res.result
      this.LBG1.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG2=res.result
      this.LBG2.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG3=res.result
      this.LBG3.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG4=res.result
      this.LBG4.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG5=res.result
      this.LBG5.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG6=res.result
      this.LBG6.sort = this.sort; 
    } 
    if(res.result!=null)
    {
      this.LBG7=res.result
      this.LBG7.sort = this.sort; 
    }
    // North
    if(res.result!=null)
    {
      this.NEG1=res.result
      this.NEG1.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG2=res.result
      this.NEG2.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG3=res.result
      this.NEG3.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG4=res.result
      this.NEG4.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG5=res.result
      this.NEG5.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG6=res.result
      this.NEG6.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.NEG7=res.result
      this.NEG7.sort = this.sort; 
    }
    //BP93Gate
    if(res.result!=null)
    {
      this.BP93EMPLOYEE=res.result
      this.BP93EMPLOYEE.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93LMV=res.result
      this.BP93LMV.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93HMV=res.result
      this.BP93HMV.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93VISITOR=res.result
      this.BP93VISITOR.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93CONTRACTUAL=res.result
      this.BP93CONTRACTUAL.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93TEMPWORKER=res.result
      this.BP93TEMPWORKER.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.BP93TEMPVEHICLE=res.result
      this.BP93TEMPVEHICLE.sort = this.sort; 
    }
    //RG
    if(res.result!=null)
    {
      this.RGEMPLOYEE=res.result
      this.RGEMPLOYEE.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGLMV=res.result
      this.RGLMV.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGHMV=res.result
      this.RGHMV.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGVISITOR=res.result
      this.RGVISITOR.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGCONTRACTUAL=res.result
      this.RGCONTRACTUAL.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGTEMPWORKER=res.result
      this.RGTEMPWORKER.sort = this.sort; 
    }
    if(res.result!=null)
    {
      this.RGTEMPVEHICLE=res.result
      this.RGTEMPVEHICLE.sort = this.sort; 
    }
    // TabCount & Card Details 
    this.refCount = res.counts;    
    this.codeCount = res.codeCounts;
       
  })
}
}
