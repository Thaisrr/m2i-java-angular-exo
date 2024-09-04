import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {ThumbPipe} from "../../utils/pipes/thumb.pipe";
import {Book} from "../../utils/types/book.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    NgClass,
    ThumbPipe,
    FormsModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  books: Book[] = [
    {id: 0, title: 'Une chambre à soi', author: 'Virginia Woolf', isRead: false},
    {id: 1, title: 'La Servante Ecarlate', author: 'Margaret Atwood', isRead: true},
    {id: 2, title: 'Les Impatientes', author: 'Djaïli Amadou Amal', isRead: true},
    {id: 3, title: 'La Tresse', author: 'Laetitia Colombani', isRead: false},
    {id: 4, title: 'Hunger Games', author: 'Susan Colins', isRead: true},
  ];

  newBook: Pick<Book, 'title' | 'author'> = {
    title: '',
    author: '',
  }

  isSubmitted = false;

  toggleIsRead(book: Book) {
    book.isRead = !book.isRead;
  }

  get titleHasError() {
    return this.isSubmitted &&  !this.newBook.title;
  }

  get authorHasError() {
    return this.isSubmitted && !this.newBook.author;
  }

  submitNewBook() {
    this.isSubmitted = true;
    if(!this.titleHasError && !this.authorHasError) {
      const book: Book = {
        id: this.books.length,
        isRead: false,
        ...this.newBook
      }
      this.books.push(book);
      this.newBook= {
        title: '',
        author: ''
      }
      this.isSubmitted = false;
    }
  }


}
