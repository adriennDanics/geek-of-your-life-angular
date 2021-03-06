import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IUser} from "../user";
import {$, element} from "protractor";

@Component({
  selector: 'app-userhandling',
  templateUrl: './userhandling.component.html',
  styleUrls: ['./userhandling.component.css']
})
export class UserhandlingComponent implements OnInit {
  public userUsing: boolean = false;
  public notMatchingRegistratioinPassword:boolean = false;

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
    //partially successful
    this.http.post<IUser>("http://localhost:9999/user/login", null, {
      observe:"body",
      params: new HttpParams().set('email', this.loginForm.get("email").value).set('password', this.loginForm.get("password").value)}).subscribe(
      data => {
        this.fixUserToShowLogin();
      },
      err => console.log({
        error: err
      })
    );
  }

  onSubmitSignUp() {
    if(this.signUpForm.get("newPassword").value === this.signUpForm.get("newPasswordConfirm").value) {
      this.http.post<IUser>("http://localhost:9999/user", null, {
        observe: "body",
        params: new HttpParams().set('email', this.signUpForm.get("newEmail").value).set('password', this.signUpForm.get("newPassword").value)
      }).subscribe(
        data => this.fixUserToShowLogin(),
        err => console.log({
          error: err
        })
      );
    } else {
      this.notMatchingRegistratioinPassword = true;
    }
  }

  fixUserToShowLogin() {
    this.userUsing = true
  }
}
