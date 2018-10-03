import { Component, OnInit } from '@angular/core';
import { IUserDetail } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profile: IUserDetail;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile(1)
        .subscribe(data => this.profile = data);
    console.log(this.profile.fullName)
        
  }

}
