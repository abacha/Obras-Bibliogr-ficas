import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {

  public authorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private snack: MatSnackBar
  ) {
    this.fb = new FormBuilder();
  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {

    this.authorForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    });
  }

  public insertAuthor() : void {
    if (this.authorForm.valid) {
      if (this.storage.insertAuthor(this.authorForm.get('name').value)) {
        this.snack.open('Autor Inserido com Sucesso!');
      }
    }
  }

}
