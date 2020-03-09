import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPipe } from './pipes/author.pipe';



@NgModule({
  declarations: [
    AuthorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorPipe
  ],
  providers: []
})
export class SharedModule { }
