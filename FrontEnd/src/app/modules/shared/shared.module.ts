import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPipe } from './pipes/author.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AuthorPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    AuthorPipe,
    FlexLayoutModule
  ],
  providers: []
})
export class SharedModule { }
