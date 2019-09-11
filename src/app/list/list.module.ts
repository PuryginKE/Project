import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from '../components/list/list.component';
import { CaseComponent } from '../components/case/case.component';
import { ShareComponentModule } from '../share-component/share-component.module';
import { CaseendComponent} from '../caseend/caseend.component';
import { RegistrComponent } from '../components/registr/registr.component';
import { AuthComponent } from '../components/auth/auth.component';
import { CaseModule } from '../case/case.module';
import { ListService } from '../service/list.service';
import { CaseCommentsComponent } from '../components/case/case-comments/case-comments.component';
import { HighlightDirective } from '../highlight.directive';


@NgModule({
  declarations: [ListComponent, CaseComponent, CaseendComponent, CaseCommentsComponent, HighlightDirective ],
  imports: [
    ShareComponentModule,
    CommonModule,
    ListRoutingModule,
  ],
  providers: [
    ListService,
  ],
})
export class ListModule { }
