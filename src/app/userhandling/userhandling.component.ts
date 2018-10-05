import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IUser} from "../user";
import { UserhandlingService } from './userhandling.service';
import {Router} from "@angular/router";

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-userhandling',
  templateUrl: './userhandling.component.html',
  styleUrls: ['./userhandling.component.css']
})
export class UserhandlingComponent implements OnInit {
  public notMatchingRegistratioinPassword:boolean = false;
  public users = []; 

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    newEmail: new FormControl(''),
    newPassword: new FormControl(''),
    newPasswordConfirm: new FormControl(''),
  });

  constructor(private http: HttpClient, private userService: UserhandlingService, private router: Router) { }

  ngOnInit() {
      this.userService.getUsers()
        .subscribe(data => this.users = data);
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
    this.http.post<IUser>("http://localhost:9999/user/login", JSON.stringify({'email': this.loginForm.get("email").value, 'password': this.loginForm.get("password").value}), httpOptions).subscribe(
      data => {
        this.router.navigate(["/user/" + data.id]);
        localStorage.setItem("isLoggedIn", "true");
      },
      err => console.log({
        error: err
      })
    );
  }

   onSubmitSignUp() {
    if(this.signUpForm.get("newPassword").value === this.signUpForm.get("newPasswordConfirm").value) {
      this.http.post<IUser>("http://localhost:9999/user", JSON.stringify({'email': this.signUpForm.get("newEmail").value, 'password': this.signUpForm.get("newPassword").value}), httpOptions).subscribe(
        data =>  {
          this.router.navigate(["/categories"]);
          localStorage.setItem("isLoggedIn", "true");
        },
      err => console.log({
          error: err
        })
      );
    } else {
      this.notMatchingRegistratioinPassword = true;
    }
  }
}
