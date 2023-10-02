import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageRoutingModule } from './initial-page-routing.module';
import { InitialPageComponent } from './initial-page.component';
import { HeaderModule } from 'src/app/freatures/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InitialPageComponent
  ],
  imports: [
    CommonModule,
    InitialPageRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InitialPageModule { }
