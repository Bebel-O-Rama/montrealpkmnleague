import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component/sign-in.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[SignInComponent]
})
export class SignInModule { }
