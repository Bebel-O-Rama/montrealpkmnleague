import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';



import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatCardModule} from '@angular/material/card'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  exports:[
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
