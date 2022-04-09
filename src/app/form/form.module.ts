import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppForm } from './form.component'



@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AppForm],
  exports: [AppForm]
})
export class FormModule { }