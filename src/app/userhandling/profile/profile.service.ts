import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDetail } from './profile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: string = "http://localhost:9999/user/profile/";
  //this.http.get(`api/leagues/${id}`).map(res => res.json());

  constructor(private http: HttpClient) { }

  getProfile(id: number):Observable<IUserDetail> {
    console.log(this._url+id);
    return this.http.get<IUserDetail>(this._url+id);
  }
}
