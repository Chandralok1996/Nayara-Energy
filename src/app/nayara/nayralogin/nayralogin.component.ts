import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-nayralogin',
  templateUrl: './nayralogin.component.html',
  styleUrls: ['./nayralogin.component.css']
})
export class NayraloginComponent implements OnInit {

  @Input() loginPost = {
    username: '',
    password: ''

  };
  error: any;
  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }

  nayaraLogin() {

    return this.loginService.nayaraLogin(this.loginPost).subscribe(data => {


      console.log('success');
      console.log(data[0]);

    }
      , async error => {

        console.log(error.error.text);
        this.error = error.error.text;
        // this.apiservice.username=this.loginPost.name;
        // this.loginService.loginname =  this.loginPost.name;
        // console.log(this.loginService.loginname);
        // console.log(this.loginPost.password);
        // console.log();
        if (this.error === 'admin success') {
          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);
            // this.authService.loginname =  this.loginPost.name;

            // console.log(this.loginPost.name,this.loginPost.password);
            console.log('token', this.loginService.getToken());
          }



          await this.router.navigate(['landingpage']);


        }

        else if (this.error === 'Refinery Gates success') {
          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);


            console.log(this.loginPost.username, this.loginPost.password);

          }

          await this.router.navigate(['refinery']);
        }

        else if (this.error === 'Cot and Jetty success') {
          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);
            console.log(this.loginPost.username, this.loginPost.password);

          }

          this.router.navigate(['cotandjetty']);

        }
        else if (this.error === 'Residentials success') {

          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);

            console.log(this.loginPost.username, this.loginPost.password);

          }

          this.router.navigate(['otl']);
        }

        else if (this.error === 'Mumbai BKC success') {

          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);

            console.log(this.loginPost.username, this.loginPost.password);

          }

          this.router.navigate(['mumbaibkc']);
        }

        else if (this.error === 'ERT success') {

          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);

            console.log(this.loginPost.username, this.loginPost.password);

          }

          this.router.navigate(['ert']);
        }

        else if (this.error === 'Plant Area success') {

          if (!this.loginService.isLoggedIn()) {
            this.loginService.sendToken(this.loginPost.username);

            console.log(this.loginPost.username, this.loginPost.password);

          }

          this.router.navigate(['plantarea1']);
        }



        else {
          alert(this.error);
        }
      }
    );

  }

}
