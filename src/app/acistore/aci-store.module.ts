import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [ SigninComponent, HomeComponent, LoginComponent, AdminindexComponent, CartSummaryComponent],
  imports: [
    CommonModule, ModelModule, RouterModule, FormsModule
  ],
  exports: [
    HomeComponent, AdminindexComponent
  ]
})
export class AciStoreModule { }
