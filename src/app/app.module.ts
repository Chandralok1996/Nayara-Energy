import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { Plantarea1Component } from './plantarea1/plantarea1.component';
import { CotandjeetyComponent } from './cotandjeety/cotandjeety.component';
import { IsblComponent } from './isbl/isbl.component';
import { Isbl2Component } from './isbl2/isbl2.component';
import { Isbl3Component } from './isbl3/isbl3.component';
import { Isbl4Component } from './isbl4/isbl4.component';
import { MumbaibkcComponent } from './mumbaibkc/mumbaibkc.component';
import { OtlComponent } from './otl/otl.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ApiService } from './api.service';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { NayraloginComponent } from './nayara/nayralogin/nayralogin.component';
import { UserManagementComponent } from './nayara/user-management/user-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewuserComponent } from './nayara/newuser/newuser.component';
import { ErtDashboardComponent } from './nayara/ert-dashboard/ert-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RefinaryPdpComponent } from './refinary/refinary-pdp/refinary-pdp.component';
import { ShiftmgmtComponent } from './shiftmgmt/shiftmgmt.component';
import { ShiftempComponent } from './shiftemp/shiftemp.component';
import { ShiftvehComponent } from './shiftveh/shiftveh.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LogoComponent } from './logo/logo.component';
import { EdituserComponent } from './edituser/edituser.component';
import { RefGateComponent } from './ref-gate/ref-gate.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
     Plantarea1Component,
    CotandjeetyComponent,
    IsblComponent,
    Isbl2Component,
    Isbl3Component,
    Isbl4Component,
    MumbaibkcComponent,
    OtlComponent,
    NayraloginComponent,
	UserManagementComponent,
NavbarComponent,
NewuserComponent,
ErtDashboardComponent,
SidebarComponent,
RefinaryPdpComponent,    
ShiftmgmtComponent,
ShiftempComponent,
ShiftvehComponent,
DialogBoxComponent,
LogoComponent,
EdituserComponent,
RefGateComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
    MatSelectModule,
    MatSortModule,
    NgScrollbarModule,MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    NgxMaterialTimepickerModule,
      NgbPaginationModule, NgbAlertModule,
       NgbModule
    ],
    exports:[NewuserComponent],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [NewuserComponent]
})
export class AppModule { }
