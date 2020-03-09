import { Injectable } from '@angular/core';
import { Author } from '../../interfaces/author';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StorageService {

  private authors : Author[] = [];

  private dataSource = new BehaviorSubject<Author[]>(this.authors);
  public authorList = this.dataSource.asObservable();

  constructor() {
    this.createItem('authors');
    this.dataSource.next(JSON.parse(localStorage.getItem('authors')));
  }

  public insertAuthor( name: string): boolean {
    const author: Author = {
      name
    }
    
    return this.insert(author);
  }

  private createItem(itemName: string): void {
    if (localStorage.getItem(itemName) === null) {
      localStorage.setItem(itemName, JSON.stringify([]));
    }
  }

  private insert(author: Author): boolean {
    if (this.authors.push(author) ) {
      localStorage.setItem('authors', JSON.stringify(this.authors));
      this.dataSource.next(this.authors);
      return true;
    }

    return false;
  }

}
