import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../components/list/list.component';

import { AuthComponent } from '../components/auth/auth.component';

import { RegistrComponent} from '../components/registr/registr.component';
import { CaseendComponent } from '../caseend/caseend.component';
import { CaseComponent } from '../components/case/case.component';
//import { CaseModule } from '../components/case/case.module';

const routes: Routes = [
 
  {path: '', component: ListComponent},
  { path: 'type/:type', component: ListComponent},
  { path: 'caseend', component: CaseendComponent },
 { path: 'case/:id', component: CaseComponent },
 { path: 'case', component: CaseComponent }
];

export const ListRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);




