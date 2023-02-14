import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  istSuperBuch = false;

  _book?: Book | undefined;

  @Input()
  public set book(value: Book | undefined) {
    this._book = value;
    this.istSuperBuch = value?.title === 'Angular';
  }
}
