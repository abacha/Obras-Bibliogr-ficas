import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { StorageService } from './services/storage/storage.service';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SiteComponent,
    AuthorFormComponent,
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SiteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StorageService
  ]
})
export class SiteModule { }
