import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule, MatSnackBarModule, MatCheckboxModule, MatSidenavModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
