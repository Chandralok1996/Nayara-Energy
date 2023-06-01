import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,retry, map, tap, audit } from 'rxjs/operators';
import { rfdetail, ert, getAsset,empshiftdetails,empshiftstatus,shift, shift1, nayuser, usrl,adduser,updateuser,empshift,contrshift,lmvshift, hmvshift,vendor,tokenname } from './userlist';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userData:any;
  // private api = 'http://localhost:3000/';
  // private api1 = 'http://172.16.16.5:3000/'
  private api = 'http://172.16.16.5:3000/'
  private apiUrl = 'http://engine.augtrans.com:4002/';

  constructor(public http: HttpClient ) {

   }

  public getAsset(): Observable<getAsset[]>{
    return this.http.get<getAsset[]>(this.api + 'licbrasset1' );
  }

  // getAsset()
  // {  const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'auth-token': JSON.parse(localStorage.getItem('user') || '').token,
  //     }),
  //   };
  //   return this.http.get<any>(
  //     `${environment.api}/licbrasset1`,
  //     httpOptions
  //   );
  // }

  public assetvendor(): Observable<vendor[]>{  
    return this.http.get<vendor[]>(this.api + 'astv'  );
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
	  // mail
	  public employeeshift(): Observable<empshift[]>{
  return this.http.get<empshift[]>(this.api + 'emplshift' );
}

public contrshift(): Observable<contrshift[]>{
  return this.http.get<contrshift[]>(this.api + 'contrshift' );
}

public lmvshift(): Observable<lmvshift[]>{
  return this.http.get<lmvshift[]>(this.api + 'lmvshift' );
}
public hmvshift(): Observable<hmvshift[]>{
  return this.http.get<hmvshift[]>(this.api + 'hmvshift' );
}

public TFAERT(): Observable<ert[]>{
 return this.http.get<ert[]>(this.api + 'TFAERTdetails' );
 }
 public AuxERT(): Observable<ert[]>{
 return this.http.get<ert[]>(this.api + 'AuxERTdetails' );
 }
 public SOERT(): Observable<ert[]>{
 return this.http.get<ert[]>(this.api + 'SOERTdetails' );
 }
 public ECCPERT(): Observable<ert[]>{
 return this.http.get<ert[]>(this.api + 'ECCPERTdetails' );
}
 public ECCSERT(): Observable<ert[]>{
 return this.http.get<ert[]>(this.api + 'ECCSERTdetails' );
 }
	 public token1(tokenname): Observable<tokenname> {
  return this.http.post<tokenname>(this.api + 'token1', JSON.stringify(tokenname),this.httpOptions)
  .pipe(

  )
}

tokenname:any;
getname(): Observable<any[]> {
  return of(this.tokenname);
}

//Dashboard/Landing page API
  // dashboard()
  // {        
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'auth-token': JSON.parse(localStorage.getItem('user') || '').token,
  //     }),
  //   };
  //   return this.http.get<any>(
  //     `${environment.api}/dashboard/landingPage`,
  //     httpOptions
  //   );
  // }

             public dashboard():Observable<any>
             {
              return this.http.get<any>(this.api + 'dashboard/landingPage');
             }


//Refinery gate API
public refinaryGate(flag2:any, code:any):Observable<any>
  {        
    const params= new HttpParams({
          fromString: `flag2=${flag2}`,
        });
    const params1= new HttpParams({
          fromString: `code=${code}`,
        });
        return this.http.get<any>(`${this.api}dashboard/refineryGates?${params}&${params1}`,);
  }
//cot&jeety gate API
  cotAndJeety(flag2:any, code:any)
  {         
    const params= new HttpParams({
          fromString: `flag2=${flag2}`,
        });
    const params1= new HttpParams({
          fromString: `code=${code}`,
        });
        return this.http.get<any>(`${this.api}dashboard/cotAndJetty?${params}&${params1}`,);
     }
//Residencial API
  residential(flag2:any, code:any)
  {        
    const params= new HttpParams({
          fromString: `flag2=${flag2}`,
        });
    const params1= new HttpParams({
          fromString: `code=${code}`,
        });
        return this.http.get<any>(`${this.api}dashboard/residential?${params}&${params1}`,);
  }
//MumbaiBKC API
  mumbaiBKC(flag2:any, code:any)
  {         
    const params= new HttpParams({
          fromString: `flag2=${flag2}`,
        });
    const params1= new HttpParams({
          fromString: `code=${code}`,
        });
        return this.http.get<any>(`${this.api}dashboard/mumbaiBkc?${params}&${params1}`,);
  }
//plantArea API
  plantArea(flag2:any, flag3:any, code:any)
  {        
    
    const params= new HttpParams({
          fromString: `flag2=${flag2}`,
        });
    const params1= new HttpParams({
          fromString: `flag3=${flag3}`,
        });
    const params2= new HttpParams({
          fromString: `code=${code}`,
        });
        return this.http.get<any>(`${this.api}dashboard/plantArea?${params}&${params1}&${params2}`,);
  }

}
