import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngularMat';

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCompComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
