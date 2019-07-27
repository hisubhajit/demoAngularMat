import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-comp',
  templateUrl: './dialog-comp.component.html',
  styleUrls: ['./dialog-comp.component.css']
})
export class DialogCompComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<DialogCompComponent>) { }

  ngOnInit() {
  }
  onCloseit(){
    this.dialogRef.close();
  }

}
