import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuContentComponent } from '../menu-content/menu-content.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuContentComponent],
  exports: [
    MenuContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ShareComponentModule { }
