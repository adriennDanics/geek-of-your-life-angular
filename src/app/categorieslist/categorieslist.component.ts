import { Component, OnInit } from '@angular/core';
import { CategorieslistService } from './categorieslist.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {

  public categories = [];

  constructor(private router: Router, private categoryService: CategorieslistService) { }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn") === "true") {
      this.categoryService.getCategories().subscribe(data => this.categories = data);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
