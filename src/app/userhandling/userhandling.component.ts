import { Component, OnInit } from '@angular/core';
import {$, element} from "protractor";

@Component({
  selector: 'app-userhandling',
  templateUrl: './userhandling.component.html',
  styleUrls: ['./userhandling.component.css']
})
export class UserhandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    document.getElementById("signIn").classList.add("active-dx");
    document.getElementById("signUp").classList.add("inactive-sx");
    document.getElementById("signUp").classList.remove("active-sx");
    document.getElementById("signIn").classList.remove("inactive-dx");
  }

  onBack() {
    document.getElementById("signIn").classList.add("inactive-dx");
    document.getElementById("signUp").classList.add("active-sx");
    document.getElementById("signUp").classList.remove("inactive-sx");
    document.getElementById("signIn").classList.remove("active-dx");
  }

}
