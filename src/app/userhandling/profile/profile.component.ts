import { Component, OnInit } from '@angular/core';
import { IUserDetail } from './profile';
import { ProfileService } from './profile.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: IUserDetail;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn") === "true"){
      this.profileService.getProfile(4)
      .subscribe(data => this.profile = data);
    } else {
      this.router.navigate(["/login"]);
    }

  }

}
