import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from './category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategorieslistService {

  private _url: string = "http://localhost:9999/categories/";

  constructor(private http: HttpClient) { }

  getCategories():Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._url)
  }
}
