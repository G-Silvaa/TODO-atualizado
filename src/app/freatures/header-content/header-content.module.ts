import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContentComponent } from './header-content.component';
import { MatDialogModule } from "@angular/material/dialog"
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [HeaderContentComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],exports: [HeaderContentComponent]
})
export class HeaderContentModule { }


