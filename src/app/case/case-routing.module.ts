import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from '../components/case/case.component';

const routes: Routes = [
   
  {path: '', component: CaseComponent},
];


export const CaseRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);


