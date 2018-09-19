import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'geek-of-your-life';
  user: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let obs = this.http.get('http://localhost:8080/users/');
    obs.subscribe((response) => console.log(response))
  }
}
