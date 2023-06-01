import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api='http://172.16.16.5:3000/';
  // private api='http://localhost:3000';
  constructor(public http: HttpClient,private router: Router) { }
  
  nayaraLogin(nayralogin: any = {}): Observable<any> {
    return this.http.post(`${this.api + 'login'}`, nayralogin)
  }
  sendToken(token: string) {
    localStorage.setItem( "LoggedInUser" , token)  
  }


  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    window.localStorage.removeItem("LoggedInUser");
    this.router.navigate(['login']);
  }
 

}
