import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  constructor(private router : Router, private dialogRef: MatDialogRef<EventDialogComponent>) { }

  ngOnInit(): void {
  }

  public gotoLink(link:string){
    this.router.navigate([link]);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
