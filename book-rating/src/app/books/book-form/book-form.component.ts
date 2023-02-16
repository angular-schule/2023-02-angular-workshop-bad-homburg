import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Output() create = new EventEmitter<Book>();
  @Output() edit = new EventEmitter<Book>();

  selectedBook?: Book;

  @Input()
  set book(book: Book | undefined) {

    if (book) {
      this.bookForm.setValue({
        isbn: book.isbn,
        title: book.title,
        description: book.description
      });
      this.c.isbn.disable();
    } else {
      this.c.isbn.enable();
    }

    this.selectedBook = book;
  }

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  hasError(control: FormControl): boolean {
    return control.touched && control.invalid;
  }

  submitForm() {

    if (!this.selectedBook) {
      const newBook = {
        ...this.bookForm.getRawValue(),
        rating: 1
      }

      this.create.emit(newBook);

    } else {
      const updatedBook = {
        ...this.bookForm.getRawValue(),
        rating: this.selectedBook.rating
      }

      this.edit.emit(updatedBook);
    }

    this.bookForm.reset();
  }
}
