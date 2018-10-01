import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* template: 
    `<h2>Users</h2>
    <ul *ngFor= "let user of users">
      <li>{{ user.email }}</li>
    </ul>
    ` */
})

export class AppComponent {
  title = 'geek-of-your-life';

  public users = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    //let obs = this.http.get('http://localhost:8080/users/');
    //obs.subscribe((response) => console.log(response))
    this.getUsers().subscribe(data => this.users = data);
    
  }

  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:9999/users/')
  }
}
