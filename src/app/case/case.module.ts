import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from '../components/case/case.component';
import { CaseCommentsComponent } from '../components/case/case-comments/case-comments.component';

@NgModule({
  declarations: [CaseComponent, CaseCommentsComponent],
  imports: [
    CommonModule,
    CaseRoutingModule
  ],
  exports: [
    CaseCommentsComponent
  ]
})
export class CaseModule { }
