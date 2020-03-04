import { Component, OnInit } from '@angular/core';
import { BookRepository } from 'src/app/model/book.repository';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private repository: BookRepository) {}
   get Books() : Book[]{
     return this.repository.getBooks();
   }

  ngOnInit() {
  }

}
