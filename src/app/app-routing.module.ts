import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './acistore/home/home.component';
import { SigninComponent } from './acistore/signin/signin.component';
import { LoginComponent } from './acistore/login/login.component';
import { AdminindexComponent } from './acistore/adminindex/adminindex.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "signup", component: SigninComponent},
  {path: "login", component: LoginComponent},
  {path: "admin-index", component: AdminindexComponent},

  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
