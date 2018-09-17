import {Category} from "../categorieslist/category.model";

export class Question {
  public category: Category;
  public question: string;

  constructor(category: Category, question: string) {
    this.category = category;
    this.question = question;
  }
}
