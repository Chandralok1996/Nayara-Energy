import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { getAsset, vendor } from 'src/app/userlist';

@Component({
  selector: 'app-refinary-pdp',
  templateUrl: './refinary-pdp.component.html',
  styleUrls: ['./refinary-pdp.component.css']
})
export class RefinaryPdpComponent implements OnInit  , AfterViewInit {

  public buttonName:any = 'Show';
  public admin:boolean = false;
  membership:string;
  loginform: FormGroup;
  value:string;
  allUser:vendor[];
  dataSource: MatTableDataSource<vendor>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['astv_id','vendor_name','vendor_location','actions'];
  selection = new SelectionModel<vendor>(true, []);

  constructor(public apiservice:ApiService, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.apiservice.assetvendor().subscribe(data =>{  
    console.log(data);
    this.dataSource = new MatTableDataSource(data);
   this.dataSource.sort = this.sort; 
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


}
