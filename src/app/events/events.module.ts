import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[EventsComponent] 
})
export class EventsModule { }
