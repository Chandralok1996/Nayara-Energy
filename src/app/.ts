

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError,retry, map, tap, audit } from 'rxjs/operators';
import { rfdetail,vendor , getAsset,empshiftdetails,empshiftstatus,shift, shift1, nayuser, usrl,adduser,updateuser,empshift } from './userlist';


// @Injectable({
//   providedIn: 'root'
// })
export class ApiService {


  userData:any;
  private api = 'http://172.16.16.5:3000/';
  // private api1 = 'http://localhost:3000/'
  private apiUrl = 'http://engine.augtrans.com:4002/';
  
  

  constructor(public http: HttpClient ) {

   }






  public getAsset(): Observable<getAsset[]>{

    return this.http.get<getAsset[]>(this.api + 'licbrasset1' );
	    }


public assetvendor(): Observable<vendor[]>{

  return this.http.get<vendor[]>(this.api + 'astv'  );
}

  
public RFempdetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFempdetails'  );
}

public RFVehicleLMVdetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFVehicleLMVdetails'  );
}


public RFVisitordetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFVisitordetails'  );
}

public RFCONTRACTUALdetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFCONTRACTUALdetails'  );
}

public RFTEMPWorkerdetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFTEMPWorkerdetails'  );
}
public RFTEMPVehicledetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFTEMPVehicledetails'  );
}








public RFVehicleHMVdetails(): Observable<rfdetail[]>{

  return this.http.get<rfdetail[]>(this.api + 'RFVehicleHMVdetails'  );
}

getadata(): Observable<any[]>{
  return  of(this.userData);
 }


public getUserManagement(): Observable<any>{

  return this.http.get(this.api + 'usud'  );
}
//token=localStorage.getItem("LoggedInUser");
httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
   //'Name':this.token,
  })
}

public empshift(): Observable<shift[]>{
    
      return this.http.get<shift[]>(this.api + 'empshift' );
    }

    public contshift(): Observable<shift1[]>{
    
      return this.http.get<shift1[]>(this.api + 'contshift' );
    }
    public vehicleshift(): Observable<shift[]>{
    
      return this.http.get<shift[]>(this.api + 'vehicleshift' );
    }

    public nayarauser(): Observable<nayuser[]>{
    
      return this.http.get<nayuser[]>(this.api + 'nayarausers' );
    }
    public usrl(): Observable<usrl[]>{
    
      return this.http.get<usrl[]>(this.api + 'usrl' );
    }

public timerange(empshiftdetails): Observable<empshiftdetails> {
  console.log(empshiftdetails)
  return this.http.post<empshiftdetails>(this.api + 'empshiftdetails ', JSON.stringify(empshiftdetails),this.httpOptions)
  .pipe(
    //catchError(this.handleError) /vehicleshiftdetails
  )
} 

public status(empshiftstatus): Observable<empshiftstatus> {
  console.log(empshiftstatus)
  return this.http.post<empshiftstatus>(this.api + 'empshiftstatus', JSON.stringify(empshiftstatus),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 

public timerange1(empshiftdetails): Observable<empshiftdetails> {
  console.log(empshiftdetails)
  return this.http.post<empshiftdetails>(this.api + 'contworkershiftdetails ', JSON.stringify(empshiftdetails),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 

public status1(empshiftstatus): Observable<empshiftstatus> {
  console.log(empshiftstatus)
  return this.http.post<empshiftstatus>(this.api + 'contworkershiftstatus', JSON.stringify(empshiftstatus),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 
public timerange2(empshiftdetails): Observable<empshiftdetails> {
  console.log(empshiftdetails)
  return this.http.post<empshiftdetails>(this.api + 'vehicleshiftdetails', JSON.stringify(empshiftdetails),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 

public status2(empshiftstatus): Observable<empshiftstatus> {
  console.log(empshiftstatus)
  return this.http.post<empshiftstatus>(this.api + 'vehicleshiftstatus', JSON.stringify(empshiftstatus),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 

public nayaraadduser(adduser): Observable<adduser> {
  console.log(adduser)
  return this.http.post<adduser>(this.api + 'adduser', JSON.stringify(adduser),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 

public nayarauserupdate(updateuser): Observable<updateuser> {
  console.log(updateuser)
  return this.http.post<updateuser>(this.api + 'updateuser', JSON.stringify(updateuser),this.httpOptions)
  .pipe(
    //catchError(this.handleError)
  )
} 


 





public empshiftB(): Observable<empshift[]>{

  return this.http.get<empshift[]>(this.api + 'empshiftB' );
}

public empshiftA(): Observable<empshift[]>{

  return this.http.get<empshift[]>(this.api + 'empshiftA' );
}

}

