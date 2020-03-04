import { Injectable } from '@angular/core';

@Injectable()
export class Book{
    public bookId ?: number;
        public booktitle ?: string;
        public bookauthor ?: string;
        public bookprice ?: number;
        public bookquantity ?: number

}