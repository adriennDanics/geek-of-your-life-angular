import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserhandlingService {
  private _url: string = "http://localhost:9999/users/";

  constructor(private http: HttpClient) { }

  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url)
  }

}
