import { Component, OnInit } from '@angular/core';
import { CategorieslistService } from './categorieslist.service';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {

  public categories = [];

  constructor(private categoryService: CategorieslistService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
    console.log(this.categories.values);
  }

}
