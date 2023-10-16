import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/freatures/navbar/navbar.module';
import { HeaderContentModule } from 'src/app/freatures/header-content/header-content.module';
import { ContentPageComponent } from './content-page.component';
import { ContentPageRoutingModule } from './content-page-routing.module';
import { FormsModule } from '@angular/forms';









@NgModule({
    declarations: [
        ContentPageComponent
    ],
    imports: [
        CommonModule,
         NavbarModule,
         HeaderContentModule,
         ContentPageRoutingModule,
         FormsModule
    ]
})
export class ContentPageModule { }
