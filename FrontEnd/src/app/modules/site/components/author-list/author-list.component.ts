import { Component, OnInit } from '@angular/core';
import { Author } from '../../interfaces/author';
import { StorageService } from '../../services/storage/storage.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  public displayedColumns: [string] = ['name'];

  public tableDatasource: MatTableDataSource<Author>

  constructor(
    private storage: StorageService
  ) {
    this.tableDatasource = new MatTableDataSource();
    this.storage.authorList.subscribe(
      success => {
        this.tableDatasource.data = success;
      }
    )
  }

  ngOnInit(): void {
  }

}
