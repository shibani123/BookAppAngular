import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { StaticDataSource } from './static.datasource';
import { Observable, from } from 'rxjs';

@Injectable()
export class BookRepository{

    private books : Book[] = [];
    
    constructor(private staticdatasource : StaticDataSource){
        staticdatasource.getBooks().subscribe(data => 
            {
                this.books = data;
            });
            this.books.sort((a,b)=> a.booktitle.localeCompare(b.booktitle));
    }

    getBooks() : Book[] {
        return this.books;
    }

    saveBooks(book : Book) : Observable<Book>{
        return this.staticdatasource.saveBooks(book);
    }

    editBooks(book : Book) : Observable<Book>{
        return this.staticdatasource.editBooks(book);
    }

}