import { Component, OnInit } from '@angular/core';
import { IUserDetail } from './profile';
import { ProfileService } from './profile.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: IUserDetail;
  public id: number;

  constructor(private router: Router, private profileService: ProfileService, private routeActive: ActivatedRoute) {
    this.routeActive.params.subscribe(params => this.id = Number(params));
  }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn") === "true"){
      this.profileService.getProfile(this.id)
      .subscribe(data => this.profile = data);
    } else {
      this.router.navigate(["/login"]);
    }

  }

}
