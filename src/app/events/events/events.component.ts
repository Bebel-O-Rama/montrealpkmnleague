import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // private dialog : MatDialog;

  constructor(private matDialog: MatDialog) { 
    // this.dialog = dia;
  }

  ngOnInit(): void {
  }

  public openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      // title:string = 'hello';
    }
  
    const dialogRef = this.matDialog.open(MatDialog, dialogConfig);
  }
}
