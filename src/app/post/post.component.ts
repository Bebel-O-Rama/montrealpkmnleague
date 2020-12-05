import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventDialogComponent } from '../event-dialog/event-dialog/event-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private matDialog : MatDialog) { }

  ngOnInit(): void {
  }
  disableSelect = new FormControl(false);
  
  public gotoLink(link:string){
    this.router.navigate([link]);
  }

  public openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
 
  
    this.matDialog.open(EventDialogComponent, dialogConfig);
  }
}
