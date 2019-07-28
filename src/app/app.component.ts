import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';
import { DataServiceService } from './data-service.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngularMat';

  constructor(public dialog: MatDialog, private dataService:DataServiceService){}

  dataFromServ: any = undefined;
  subsc: Subscription;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCompComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getData(){
    this.dataFromServ = undefined;
    const dialogRef = this.dialog.open(DialogCompComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.subsc.unsubscribe();
      
    });
    this.subsc = this.dataService.getData().subscribe(response =>{
      this.dataFromServ = response;
      dialogRef.close();
      console.log(response);
    })
  }
}
