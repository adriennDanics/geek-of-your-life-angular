import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserhandlingComponent } from './userhandling/userhandling.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ProfileComponent } from './userhandling/profile/profile.component';
import { UserhandlingService } from './userhandling/userhandling.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CategorieslistService } from './categorieslist/categorieslist.service';

const appRoutes: Routes = [
  { path: 'login', component: UserhandlingComponent },
  { path: 'user/:id',      component: ProfileComponent },
  {
    path: 'categories',
    component: CategorieslistComponent,
    data: { title: 'Categories List' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserhandlingComponent,
    CategorieslistComponent,
    QuestionnaireComponent,
    ProfileComponent,
    PagenotfoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserhandlingService, CategorieslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
