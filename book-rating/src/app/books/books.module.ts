import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/book-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookFormComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
