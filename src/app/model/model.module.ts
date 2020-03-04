import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRepository } from './book.repository';
import { StaticDataSource } from './static.datasource';
import { CustomerRepository } from './customer.repository';

import { Customer } from './customer.model';
import { HttpClientModule } from '@angular/common/http'
import { RestDataSource } from './rest.datasource';
import { Book } from './book.model';
import { Promotion } from './promotion.model';
import { PromotionRepository } from './promotion.repository';

@NgModule({
  providers: [BookRepository, CustomerRepository, Customer, Book, Promotion, PromotionRepository, { provide: StaticDataSource, useClass: RestDataSource}],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class ModelModule { }
