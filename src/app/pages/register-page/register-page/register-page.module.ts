import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { HeaderModule } from 'src/app/freatures/header/header.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterPageModule { }
