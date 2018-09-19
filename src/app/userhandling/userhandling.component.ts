import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-userhandling',
  templateUrl: './userhandling.component.html',
  styleUrls: ['./userhandling.component.css']
})
export class UserhandlingComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    newEmail: new FormControl(''),
    newPassword: new FormControl(''),
    newPasswordConfirm: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onLoginButton() {
    document.getElementById("signIn").classList.add("active-dx");
    document.getElementById("signUp").classList.add("inactive-sx");
    document.getElementById("signUp").classList.remove("active-sx");
    document.getElementById("signIn").classList.remove("inactive-dx");
  }

  onBackButton() {
    document.getElementById("signIn").classList.add("inactive-dx");
    document.getElementById("signUp").classList.add("active-sx");
    document.getElementById("signUp").classList.remove("inactive-sx");
    document.getElementById("signIn").classList.remove("active-dx");
  }

  onSubmitLogin() {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body.set('email', this.loginForm.get("email").value );
    body.set('password', this.loginForm.get("password").value);
    //partially successful
    this.http.post("http://localhost:9999/user/login", body, {
      headers: myheader}).subscribe(
      data => {
        console.log(data);
      },
      err => console.log({
        error: err
      })
    );
    console.warn(this.loginForm.value);
  }

  onSubmitSignUp() {
    //untested
    let body = "email=" + this.signUpForm.get("newEmail").value + "&password=" + this.signUpForm.get("newPassword").value;
    this.http.post("http://localhost:9999/user", body).subscribe(
      data => {
        console.log(data);
      },
      err => console.log({
        error: err
      })
    );    console.warn(this.signUpForm.value);
  }
}
