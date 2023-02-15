import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCreateComponent {

  @Output() create = new EventEmitter<Book>();

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

    const newBook = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    this.create.emit(newBook);

    this.bookForm.reset();
  }
}
