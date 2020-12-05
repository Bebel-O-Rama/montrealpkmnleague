import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { PostComponent } from './post.component';
import { EventDialogComponent } from '../event-dialog/event-dialog/event-dialog.component';
import { EventDialogModule } from '../event-dialog/event-dialog.module';



@NgModule({
  declarations: [PostComponent, EventDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EventDialogModule,
    EventDialogComponent
  ],
  exports : [PostComponent],
  entryComponents: [EventDialogComponent]
})
export class PostModule { }
