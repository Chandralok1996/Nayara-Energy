
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  getAsset } from '../../userlist';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { NewuserComponent } from '../newuser/newuser.component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-ert-dashboard',
  templateUrl: './ert-dashboard.component.html',
  styleUrls: ['./ert-dashboard.component.css']
})

export class ErtDashboardComponent implements OnInit , AfterViewInit{

  public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:getAsset[];
  dataSource: MatTableDataSource<getAsset>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  
 
  displayedColumns: string[] = ['serialno','branchcode','branchname','model_name','asset_type'];
  selection = new SelectionModel<getAsset>(true, []);

  constructor(private elementRef:ElementRef,public apiservice:ApiService,public router: Router,public dialog: MatDialog, fb: FormBuilder,) { 
    this.loginform = fb.group({
      dob: ["", Validators.required]
   });

  }
  tabledata:any;
  TFAERT:any[];
  AuxERT:any[];
  SO:any[];
  ECCP:any[];
  ECCS:any[];


  ngOnInit(): void {
    this.apiservice.getAsset().subscribe(data =>{  
      this.tabledata=data;
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort; 
     // this.dataSource.paginator = this.paginator; 
  
     });

     this.apiservice.TFAERT().subscribe(data =>{

      this.TFAERT = data;
      console.log('TFAERT',this.TFAERT);
      //this.DCUEMPLOYEE.sort = this.sort;
    });

    this.apiservice.AuxERT().subscribe(data =>{
      console.log(data);
      this.AuxERT = data;
     // this.DCUEMPLOYEE.sort = this.sort;
    });

    this.apiservice.SOERT().subscribe(data =>{
      console.log(data);
      this.SO = data;
      //this.DCUEMPLOYEE.sort = this.sort;
    });

    this.apiservice.ECCPERT().subscribe(data =>{
      console.log(data);
      this.ECCP = data;
      //this.DCUEMPLOYEE.sort = this.sort;
    });

    this.apiservice.ECCSERT().subscribe(data =>{
      console.log(data);
      this.ECCS = data
      //this.DCUEMPLOYEE.sort = this.sort;
    });

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

openDialog(): void {
  const dialogRef = this.dialog.open(NewuserComponent, {
    width: '500px',
    height: '500px',
    scrollStrategy: new NoopScrollStrategy(),
    disableClose:true,
    position: {top:'7.5%'}

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  //  this.animal = result;
  });

}

downloadata(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.TFAERT);      
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");      
  XLSX.writeFile(wb, "Report TFAERT.xlsx");
         
}
downloadata1(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.TFAERT);      
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");      
  XLSX.writeFile(wb, "Report AuxERT.xlsx");
         
}
downloadata2(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.TFAERT);      
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");      
  XLSX.writeFile(wb, "Report SO.xlsx");
         
}
downloadata3(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.TFAERT);      
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");      
  XLSX.writeFile(wb, "Report ECCP.xlsx");
         
}
downloadata4(){
  // console.log('llll',this.data1);
  var ws = XLSX.utils.json_to_sheet(this.TFAERT);      
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "data");      
  XLSX.writeFile(wb, "Report ECCS.xlsx");
         
}




}

