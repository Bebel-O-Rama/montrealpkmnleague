import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialModule } from 'src/app/material/material.module';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
