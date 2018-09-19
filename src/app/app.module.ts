import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserhandlingComponent } from './userhandling/userhandling.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ProfileComponent } from './userhandling/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserhandlingComponent,
    CategorieslistComponent,
    QuestionnaireComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
