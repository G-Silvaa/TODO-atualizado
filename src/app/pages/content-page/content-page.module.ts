import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { ContentPageRoutingModule } from './content-page-routing.module';



@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule
  ]
})
export class ContentPageModule { }
