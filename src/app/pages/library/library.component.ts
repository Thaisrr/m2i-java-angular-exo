import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {ThumbPipe} from "../../utils/pipes/thumb.pipe";
import {Book} from "../../utils/types/book.type";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    NgClass,
    ThumbPipe
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
  ]

  toggleIsRead(book: Book) {
    book.isRead = !book.isRead;
  }

}
