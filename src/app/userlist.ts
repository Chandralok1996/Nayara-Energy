import { Time } from '@angular/common';



  export interface getRef{
    userid:string,

  }
  export interface getAsset{
    userid:string,

  }

  export interface vendor{
    astv_id: string,
    vendor_name: string,
    vendor_location: string,
    

    }
    export interface rfdetail{
      Name:string,
      UserID: number,
      Code: any,
      Department: any,
      Designation: any
      
  
      }
    export interface ert{
    grdname: string,
username: string,
OfficeMobile: string,
  }
  export interface usrl{
    rlna: string,
    }
      export interface userManagement{
    usud_id: string ,
userid: string ,
username: string ,
DeptName: string ,
CTGname: string ,
DsgName: string ,
OfficeMobile: string ,


  }
  export interface empshiftdetails{
    sttime:Time;
    ettime:Time;
    shn:any;
  
  }

  export interface empshiftstatus{
    shs:any;
    shn:any;
    shna:any ;
    shnb:any;
    shnc:any;
    shnd:any;
    shng:any;
    shnn:any;


    
  }

  export interface shift{
    ussh_id: any,
sttime: any,
ettime: any,
shn: any,
shs: any,
shf: any

    
  }

  export interface shift1{
    ussh_id: any,
sttime: any,
ettime: any,
shn: any,
shs: any,
shf: any

    
  }
  export interface shift3{
    ussh_id: any,
sttime: any,
ettime: any,
shn: any,
shs: any,
shf: any

    
  }

  
  export interface nayuser{
    username: any ;
    OfficeMobile: any,
    userid: any,
    ctgcode: any ,
    DsgName: any  ,
    DptName: any
    
  }
export interface tokenname{
      name:string;
      }

  export interface adduser{
    username: any;
    password: any;
    OfficeMobile: any,
    userid: any,
    CTGname: any,
    DsgName: any,
    DeptName: any,
    rolename:any;
    
  }

  export interface updateuser{
    password: any;
    userid: any,
  }


  export interface empshift{
    ctgname: any,
CTG: any,
SHIFT: any,
count: number
  }


 export interface empshift{
    empshiftARMG:any; 
    empshiftAMTG:any;
    empshiftALBG:any;
    empshiftACOT:any;
    empshiftANE:any;
    empshiftAJETTY:any;

    empshiftBRMG:any; 
    empshiftBMTG:any;
    empshiftBLBG:any;
    empshiftBCOT:any;
    empshiftBNE:any;
    empshiftBJETTY:any;

    empshiftCRMG:any; 
    empshiftCMTG:any;
    empshiftCLBG:any;
    empshiftCCOT:any;
    empshiftCNE:any;
    empshiftCJETTY:any;

    empshiftDRMG:any; 
    empshiftDMTG:any;
    empshiftDLBG:any;
    empshiftDCOT:any;
    empshiftDNE:any;
    empshiftDJETTY:any;

    empshiftGRMG:any; 
    empshiftGMTG:any;
    empshiftGLBG:any;
    empshiftGCOT:any;
    empshiftGNE:any;
    empshiftGJETTY:any;

    empshiftNRMG:any; 
    empshiftNMTG:any;
    empshiftNLBG:any;
    empshiftNCOT:any;
    empshiftNNE:any;
    empshiftNJETTY:any;
  }

  export interface contrshift{
    conshiftARMG:any; 
    conshiftAMTG:any;
    conshiftALBG:any;
    conshiftACOT:any;
    conshiftANE:any;
    conshiftAJETTY:any;

    conshiftBRMG:any; 
    conshiftBMTG:any;
    conshiftBLBG:any;
    conshiftBCOT:any;
    conshiftBNE:any;
    conshiftBJETTY:any;

    conshiftCRMG:any; 
    conshiftCMTG:any;
    conshiftCLBG:any;
    conshiftCCOT:any;
    conshiftCNE:any;
    conshiftCJETTY:any;

    conshiftDRMG:any; 
    conshiftDMTG:any;
    conshiftDLBG:any;
    conshiftDCOT:any;
    conshiftDNE:any;
    conshiftDJETTY:any;

    conshiftGRMG:any; 
    conshiftGMTG:any;
    conshiftGLBG:any;
    conshiftGCOT:any;
    conshiftGNE:any;
    conshiftGJETTY:any;

    conshiftNRMG:any; 
    conshiftNMTG:any;
    conshiftNLBG:any;
    conshiftNCOT:any;
    conshiftNNE:any;
    conshiftNJETTY:any;
  }


  export interface lmvshift{
    lmvshiftARMG:any; 
    lmvshiftAMTG:any;
    lmvshiftALBG:any;
    lmvshiftACOT:any;
    lmvshiftANE:any;
    lmvshiftAJETTY:any;

    lmvshiftBRMG:any; 
    lmvshiftBMTG:any;
    lmvshiftBLBG:any;
    lmvshiftBCOT:any;
    lmvshiftBNE:any;
    lmvshiftBJETTY:any;

    lmvshiftCRMG:any; 
    lmvshiftCMTG:any;
    lmvshiftCLBG:any;
    lmvshiftCCOT:any;
    lmvshiftCNE:any;
    lmvshiftCJETTY:any;

    lmvshiftDRMG:any; 
    lmvshiftDMTG:any;
    lmvshiftDLBG:any;
    lmvshiftDCOT:any;
    lmvshiftDNE:any;
    lmvshiftDJETTY:any;

    lmvshiftGRMG:any; 
    lmvshiftGMTG:any;
    lmvshiftGLBG:any;
    lmvshiftGCOT:any;
    lmvshiftGNE:any;
    lmvshiftGJETTY:any;

    lmvshiftNRMG:any; 
    lmvshiftNMTG:any;
    lmvshiftNLBG:any;
    lmvshiftNCOT:any;
    lmvshiftNNE:any;
    lmvshiftNJETTY:any;
  }

  export interface hmvshift{
    hmvshiftARMG:any; 
    hmvshiftAMTG:any;
    hmvshiftALBG:any;
    hmvshiftACOT:any;
    hmvshiftANE:any;
    hmvshiftAJETTY:any;

    hmvshiftBRMG:any; 
    hmvshiftBMTG:any;
    hmvshiftBLBG:any;
    hmvshiftBCOT:any;
    hmvshiftBNE:any;
    hmvshiftBJETTY:any;

    hmvshiftCRMG:any; 
    hmvshiftCMTG:any;
    hmvshiftCLBG:any;
    hmvshiftCCOT:any;
    hmvshiftCNE:any;
    hmvshiftCJETTY:any;

    hmvshiftDRMG:any; 
    hmvshiftDMTG:any;
    hmvshiftDLBG:any;
    hmvshiftDCOT:any;
    hmvshiftDNE:any;
    hmvshiftDJETTY:any;

    hmvshiftGRMG:any; 
    hmvshiftGMTG:any;
    hmvshiftGLBG:any;
    hmvshiftGCOT:any;
    hmvshiftGNE:any;
    hmvshiftGJETTY:any;

    hmvshiftNRMG:any; 
    hmvshiftNMTG:any;
    hmvshiftNLBG:any;
    hmvshiftNCOT:any;
    hmvshiftNNE:any;
    hmvshiftNJETTY:any;
  }
