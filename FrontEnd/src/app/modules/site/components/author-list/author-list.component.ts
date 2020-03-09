import { Component, OnInit } from '@angular/core';
import { Author } from '../../interfaces/author';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  public displayedColumns: [string] = ['name'];

  public tableDatasource: [Author];

  constructor(
    private storage: StorageService
  ) {
    this.storage.authorList.subscribe(
      success => this.tableDatasource = success
    )
  }

  ngOnInit(): void {
  }

}
