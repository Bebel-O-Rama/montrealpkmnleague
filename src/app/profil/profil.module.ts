import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ProfilComponent]
})
export class ProfilModule { }
