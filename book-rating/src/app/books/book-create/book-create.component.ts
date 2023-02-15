import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

    // 1. Erzeuge ein Event mit dem Namen 'create'
    // 2. Emitte das Event
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu

    this.bookForm.reset();
  }
}
