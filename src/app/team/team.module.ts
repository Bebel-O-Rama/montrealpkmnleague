import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TeamModule { }
