import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, share, switchMap } from 'rxjs';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bs = inject(BooksService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') ?? ''),
    switchMap(isbn => this.bs.booksIsbnGet(isbn)),
    share()
  )

}
