import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { NavbarModule } from 'src/app/freatures/navbar/navbar.module';
import { ContentPageRoutingModule } from './content-page-routing.module';




@NgModule({
  declarations: [
    ContentPageComponent
    
  ],
  imports: [
    CommonModule,
    NavbarModule,
    ContentPageRoutingModule
  ]
})
export class ContentPageModule { }
