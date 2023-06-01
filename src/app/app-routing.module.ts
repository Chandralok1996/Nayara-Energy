import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RefGateComponent } from './ref-gate/ref-gate.component';
import { Plantarea1Component } from './plantarea1/plantarea1.component';
import { CotandjeetyComponent } from './cotandjeety/cotandjeety.component';
import { IsblComponent } from './isbl/isbl.component';
import { Isbl2Component } from './isbl2/isbl2.component';
import { Isbl3Component } from './isbl3/isbl3.component';
import { Isbl4Component } from './isbl4/isbl4.component';
import { MumbaibkcComponent } from './mumbaibkc/mumbaibkc.component';
import { OtlComponent } from './otl/otl.component';
import { NayraloginComponent } from './nayara/nayralogin/nayralogin.component';
import { UserManagementComponent } from './nayara/user-management/user-management.component';
import { ErtDashboardComponent } from './nayara/ert-dashboard/ert-dashboard.component';
import { RefinaryPdpComponent } from './refinary/refinary-pdp/refinary-pdp.component';
import { ShiftmgmtComponent } from './shiftmgmt/shiftmgmt.component';
import { ShiftempComponent } from './shiftemp/shiftemp.component';
import { ShiftvehComponent } from './shiftveh/shiftveh.component';
import { AuthguardGuard } from './authguard.guard';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{path:'landingpage', component:LandingpageComponent,canActivate:[AuthguardGuard]},
{path:'ref-gate', component:RefGateComponent,canActivate:[AuthguardGuard]},
{path:'plantarea1',component:Plantarea1Component,canActivate:[AuthguardGuard]},
  {path:'cotandjetty',component:CotandjeetyComponent,canActivate:[AuthguardGuard]  },
  {path:'isbl1', component:IsblComponent,canActivate:[AuthguardGuard]},
  {path:'isbl2',component:Isbl2Component,canActivate:[AuthguardGuard]},
  {path:'isbl3',component:Isbl3Component,canActivate:[AuthguardGuard]},
  {path:'isbl4',component:Isbl4Component,canActivate:[AuthguardGuard]},
  {path:'mumbaibkc',component:MumbaibkcComponent,canActivate:[AuthguardGuard]},
  {path:'otl',component:OtlComponent,canActivate:[AuthguardGuard]},
  {path:'login',component:NayraloginComponent,},
  { path: 'usermanagement', component: UserManagementComponent,canActivate:[AuthguardGuard]},
{ path: 'ert', component: ErtDashboardComponent,canActivate:[AuthguardGuard]},
{ path: 'refinarypdp1', component: RefinaryPdpComponent,canActivate:[AuthguardGuard]},
{ path: 'shiftmgmt', component: ShiftmgmtComponent,canActivate:[AuthguardGuard]},
{path:'shiftcon',component:ShiftempComponent,canActivate:[AuthguardGuard]},
{path:'shiftvehicle',component:ShiftvehComponent,canActivate:[AuthguardGuard]},
{path:'mail',component:EdituserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
