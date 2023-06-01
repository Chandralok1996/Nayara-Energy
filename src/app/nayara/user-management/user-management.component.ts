
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  userManagement } from '../../userlist';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { NewuserComponent } from '../newuser/newuser.component';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit , AfterViewInit{

  public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:userManagement[];
  dataSource: MatTableDataSource<userManagement>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['username','usud_id','CTGname','DeptName','DsgName','actions'];
  selection = new SelectionModel<userManagement>(true, []);

  constructor(private elementRef:ElementRef,public apiservice:ApiService,public router: Router,public dialog: MatDialog, fb: FormBuilder,) { 
    this.loginform = fb.group({
      dob: ["", Validators.required]
   });

  }
  tabledata:any;
  ngOnInit(): void {
  setInterval(()=>{

    this.apiservice.getUserManagement().subscribe(data =>{  
      this.tabledata=data;
     // console.log(data);
      this.dataSource = new MatTableDataSource(data.recordsets[0]);
      this.dataSource.sort = this.sort; 
     // this.dataSource.paginator = this.paginator; 
  
    }); 

   },2000)
  }
  
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#E5E5E5'
  
  }

//   onRowClicked(row: any) {
//     console.log('Row clicked: ', row);  

// }

onRowClicked(row: any) {
  console.log('Row clicked: ', row);
   this.apiservice.userData = row;
   this.openDialog1()
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
    panelClass:'custom-dialog-container',
    position: {top:'7.5%'}

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  //  this.animal = result;
  });

}


openDialog1(): void {
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    width: '500px',
    height: '500px',
    scrollStrategy: new NoopScrollStrategy(),
    disableClose:true,
    panelClass:'custom-dialog-container',
    position: {top:'7.5%'}

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  //  this.animal = result;
  });

}

}
