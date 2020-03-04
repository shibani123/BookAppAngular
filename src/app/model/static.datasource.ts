import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable, from } from 'rxjs';
import { Customer } from './customer.model';
import { Promotion } from './promotion.model';

@Injectable()
export class StaticDataSource{

    books : Book[]=[];
    //promos : Promotion[] = [];
    datasource: Customer[] =[];
    /*private books : Book[] = [
        new Book(1,'E','P',100,1),
        new Book(2,'D','Q',200,2),
        new Book(3,'C','R',300,3),
        new Book(4,'B','S',400,4),
        new Book(5,'A','T',500,5),
    ];*/

    getBooks() : Observable<Book[]>{
        this.books.forEach(ele => {

        });
        return from([this.books]);
    }

    saveBooks(book : Book) : Observable<Book>{
        return from([book]);
    }
    saveCustomer(customer : Customer) : Observable<Customer> {
        console.log(JSON.stringify(customer));
        return from([customer]);
    }
    getCustomers() : Observable<Customer[]>{
        this.datasource.forEach(element => {
           // console.log(JSON.stringify(element));
        });
        return from([this.datasource]);
    }

    savePromotion(promo : Promotion): Observable<Promotion>{
        
        return from([promo]);
    }

    editBooks(book : Book): Observable<Book>{
        return from([book]);
    }
   
}