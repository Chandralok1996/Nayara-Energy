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
  selector: 'app-cotandjeety',
  templateUrl: './cotandjeety.component.html',
  styleUrls: ['./cotandjeety.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CotandjeetyComponent implements OnInit {

  COTandJettymaincount1:any;

 

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

  //route cot
  visitordata=false;
  lmvdata=false;
  employeedata=false;
  hmvdata=false;
  tempworkerdata=false;
  tempvehicledata=false;
  contractstaffdata=false;

  //route jetty
  visitordata1=false;
  lmvdata1=false;
  employeedata1=false;
  hmvdata1=false;
  tempworkerdata1=false;
  tempvehicledata1=false;
  contractstaffdata1=false;

  public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:vendor[];
  dataSource: MatTableDataSource<vendor>;

  COTVISITOR: MatTableDataSource<rfdetail>;
  COTLMV: MatTableDataSource<rfdetail>;
  COTEMPLOYEE: MatTableDataSource<rfdetail>;
  COTHMV: MatTableDataSource<rfdetail>;
  COTTEMPWORKER: MatTableDataSource<rfdetail>;
  COTTEMPVEHICLE: MatTableDataSource<rfdetail>;
  COTCONTRACTUAL: MatTableDataSource<rfdetail>;

  JETTYVISITOR: MatTableDataSource<rfdetail>;
  JETTYLMV: MatTableDataSource<rfdetail>;
  JETTYEMPLOYEE: MatTableDataSource<rfdetail>;
  JETTYHMV: MatTableDataSource<rfdetail>;
  JETTYTEMPWORKER: MatTableDataSource<rfdetail>;
  JETTYTEMPVEHICLE: MatTableDataSource<rfdetail>;
  JETTYCONTRACTUAL: MatTableDataSource<rfdetail>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['UserID','Name','CTGCODE','DptName','DsgName'];
  selection = new SelectionModel<vendor>(true, []);
  cotJeetyCount: any;
  codeCount: any;

  constructor(private httpClient: HttpClient,public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.cotJeety('CMG','');
  }


  
cotvisitor1(){
  this.visitordata=true;
  let flag2="CMG"
  let code="VIST"
  this.cotJeety(flag2,code)
}
cotvisitor2(){
this.visitordata=false;
}
cotlmv1(){
this.lmvdata=true;
let flag2="CMG"
  let code="LightMotorVehicle"
  this.cotJeety(flag2,code)
}
cotlmv2(){
this.lmvdata=false;
}
cotemployee1(){
this.employeedata=true;
let flag2="CMG"
let code="EMP"
this.cotJeety(flag2,code)
}
cotemployee2(){
this.employeedata=false;
}
cothmv1(){
this.hmvdata=true;
let flag2="CMG"
  let code="HeavyMotorVehicle"
  this.cotJeety(flag2,code)
}
cothmv2(){
this.hmvdata=false;
}
cottempworker1(){
this.tempworkerdata=true;
let flag2="CMG"
let code="TEMPPA"
this.cotJeety(flag2,code)
}
cottempworker2(){
this.tempworkerdata=false;
}
cottempvehicle1(){
this.tempvehicledata=true;
let flag2="CMG"
let code="TempVehicle"
this.cotJeety(flag2,code)
}
cottempvehicle2(){
this.tempvehicledata=false;
}
cotcontractstaff1(){
this.contractstaffdata=true;
let flag2="CMG"
let code="CONT"
this.cotJeety(flag2,code)
}
cotcontractstaff2(){
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

jettyvisitor1(){
  this.visitordata1=true;
  let flag2="JMG"
  let code="VIST"
  this.cotJeety(flag2,code)
 
}
jettyvisitor2(){
this.visitordata1=false;
}
jettylmv1(){
this.lmvdata1=true;
let flag2="JMG"
  let code="LightMotorVehicle"
  this.cotJeety(flag2,code)
}
jettylmv2(){
this.lmvdata1=false;
}
jettyemployee1(){
this.employeedata1=true;
let flag2="JMG"
let code="EMP"
this.cotJeety(flag2,code)
}
jettyemployee2(){
this.employeedata1=false;
}
jettyhmv1(){
this.hmvdata1=true;
let flag2="JMG"
  let code="HeavyMotorVehicle"
  this.cotJeety(flag2,code)
}
jettyhmv2(){
this.hmvdata1=false;
}
jettytempworker1(){
this.tempworkerdata1=true;
let flag2="JMG"
let code="TEMPPA"
this.cotJeety(flag2,code)
}
jettytempworker2(){
this.tempworkerdata1=false;
}
jettytempvehicle1(){
this.tempvehicledata1=true;
let flag2="JMG"
let code="TempVehicle"
this.cotJeety(flag2,code)
}
jettytempvehicle2(){
this.tempvehicledata1=false;
}
jettycontractstaff1(){
this.contractstaffdata1=true;
let flag2="JMG"
let code="CONT"
this.cotJeety(flag2,code)
}
jettycontractstaff2(){
this.contractstaffdata1=false;
}

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'
  
  }
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);  
  }
  
  applyFilter0(filterValue: string) {
    this.COTVISITOR.filter = filterValue.trim().toLowerCase();
    }
  applyFilter1(filterValue: string) {
  this.COTLMV.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.COTEMPLOYEE.filter = filterValue.trim().toLowerCase();
    }
  applyFilter3(filterValue: string) {
    this.COTHMV.filter = filterValue.trim().toLowerCase();
  }
  applyFilter4(filterValue: string) {
    this.COTTEMPWORKER.filter = filterValue.trim().toLowerCase();
  }
  applyFilter5(filterValue: string) {
    this.COTTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
  }
  applyFilter6(filterValue: string) {
    this.COTCONTRACTUAL.filter = filterValue.trim().toLowerCase();
  }
  applyFilter7(filterValue: string) {
    this.JETTYVISITOR.filter = filterValue.trim().toLowerCase();
  }
  applyFilter8(filterValue: string) {
    this.JETTYLMV.filter = filterValue.trim().toLowerCase();
  }
  applyFilter9(filterValue: string) {
    this.JETTYEMPLOYEE.filter = filterValue.trim().toLowerCase();
  }
  applyFilter10(filterValue: string) {
    this.JETTYHMV.filter = filterValue.trim().toLowerCase();
  }
  applyFilter11(filterValue: string) {
    this.JETTYTEMPWORKER.filter = filterValue.trim().toLowerCase();
  }
  applyFilter12(filterValue: string) {
    this.JETTYTEMPVEHICLE.filter = filterValue.trim().toLowerCase();
  }
  applyFilter13(filterValue: string) {
    this.JETTYCONTRACTUAL.filter = filterValue.trim().toLowerCase();
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
    XLSX.writeFile(wb, "COT VISITOR.xlsx");
  }
  Exportdata2(){
    var ws = XLSX.utils.json_to_sheet(this.data2);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT LMV REPORT.xlsx");
        }
  Exportdata3(){
    var ws = XLSX.utils.json_to_sheet(this.data3);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT EMP REPORT.xlsx");
  }
  Exportdata4(){
    var ws = XLSX.utils.json_to_sheet(this.data4);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT HMV REPORT.xlsx");
  }
  Exportdata5(){
    var ws = XLSX.utils.json_to_sheet(this.data5);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT TEMP WORKER.xlsx");
  }
  Exportdata6(){
    var ws = XLSX.utils.json_to_sheet(this.data6);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT TEMP VEHICLE.xlsx");
  }
  Exportdata7(){
    var ws = XLSX.utils.json_to_sheet(this.data7);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "COT Contractual Report.xlsx");
  }
  Exportdata8(){
    var ws = XLSX.utils.json_to_sheet(this.data8);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY VISITOR.xlsx");
  }
  Exportdata9(){
    var ws = XLSX.utils.json_to_sheet(this.data9);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY LMV REPORT.xlsx");
        }
  Exportdata10(){
    var ws = XLSX.utils.json_to_sheet(this.data10);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY EMP REPORT.xlsx");
  }
  Exportdata11(){
    var ws = XLSX.utils.json_to_sheet(this.data11);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY HMV REPORT.xlsx");
  }
  Exportdata12(){
    var ws = XLSX.utils.json_to_sheet(this.data12);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY TEMP WORKER.xlsx");
  }
  Exportdata13(){
    var ws = XLSX.utils.json_to_sheet(this.data13);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY TEMP VEHICLE.xlsx");
  }
  Exportdata14(){
    var ws = XLSX.utils.json_to_sheet(this.data14);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, "JETTY Contractual Report.xlsx");
  }            
  cotJeety(flag2:any, code:any){
    console.log(flag2,code);
    this.apiservice.cotAndJeety(flag2, code).subscribe((res:any) => {
     
      //COT
      if(res.result!=null)
      {
        this.COTVISITOR=res.result
        this.COTVISITOR.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTLMV=res.result
        this.COTLMV.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTEMPLOYEE=res.result
        this.COTEMPLOYEE.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTHMV=res.result
        this.COTHMV.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTTEMPWORKER=res.result
        this.COTTEMPWORKER.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTTEMPVEHICLE=res.result
        this.COTTEMPVEHICLE.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.COTCONTRACTUAL=res.result
        console.log(this.COTCONTRACTUAL);
        
        this.COTCONTRACTUAL.sort = this.sort; 
      } 
      //JEETY
      if(res.result!=null)
      {
        this.JETTYVISITOR=res.result
        this.JETTYVISITOR.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYLMV=res.result
        this.JETTYLMV.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYEMPLOYEE=res.result
        this.JETTYEMPLOYEE.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYHMV=res.result
        this.JETTYHMV.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYTEMPWORKER=res.result
        this.JETTYTEMPWORKER.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYTEMPVEHICLE=res.result
        this.JETTYTEMPVEHICLE.sort = this.sort; 
      } 
      if(res.result!=null)
      {
        this.JETTYCONTRACTUAL=res.result
        this.JETTYCONTRACTUAL.sort = this.sort; 
      } 
     
      // TabCount & Card Details 
      this.cotJeetyCount = res.counts;    
      this.codeCount = res.codeCounts;
       console.log(res);
         
    })
  }
  

}
