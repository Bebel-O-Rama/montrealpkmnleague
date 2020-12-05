import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [EventDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [EventDialogComponent]
})
export class EventDialogModule { }
