import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BooksService } from '../shared/http';
import { selectBooks, selectLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {


  books$ = inject(Store).select(selectBooks);
  loading$ = inject(Store).select(selectLoading);


  // br = inject(BookRatingService);
  // bs = inject(BooksService);

  constructor() {
    // this.bs.booksGet().subscribe(books => this.books = books)
  }

  selectedBook?: Book;
  // books: Book[] = [];

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // };
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }

  changeToEditMode(book: Book) {
    // this.selectedBook = book;
  }

  changeBook(changedBook: Book) {
    // this.updateAndSort(changedBook);
    // this.selectedBook = undefined;
  }
}
