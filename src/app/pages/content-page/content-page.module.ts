import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { ContentPageRoutingModule } from './content-page-routing.module';
import { NavbarModule } from 'src/app/freatures/navbar/navbar.module';



@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule,
    NavbarModule
  ]
})
export class ContentPageModule { }
