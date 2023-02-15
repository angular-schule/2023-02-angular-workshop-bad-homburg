import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class BookCreateComponent {

}
