import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistrComponent} from './components/registr/registr.component';
import { CreateCaseComponent } from './components/create-case/create-case.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [

  { path: 'list', loadChildren: './list/list.module#ListModule' },
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateCaseComponent },
  { path: 'info', component: InfoUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'registr', component: RegistrComponent },
  { path: 'chat', component: ChatComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
