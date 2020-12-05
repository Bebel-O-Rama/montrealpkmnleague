import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MaterialModule } from 'src/app/material/material.module';




@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[PokedexComponent]
})
export class PokedexModule { }
