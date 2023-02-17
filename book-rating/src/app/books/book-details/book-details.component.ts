import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, retry, switchMap, tap } from 'rxjs';

import { BooksService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  // showDetails = false;
  loading = false;

  bs = inject(BooksService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') ?? ''),
    tap(() => this.loading = true),
    switchMap(isbn => this.bs.booksIsbnGet(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        isbn: '000',
        title: 'FEHLER',
        description: err.message,
        rating: 1
      })))
    ),
    tap(() => this.loading = false),
  )

}
