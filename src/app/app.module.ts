import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { CaseComponent } from './components/case/case.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ShareComponentModule } from './share-component/share-component.module';
import { HttpService } from './http.service';
import { CaseendComponent } from './caseend/caseend.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistrComponent } from './components/registr/registr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistService } from './components/registr/registr.service';
import { AuthService } from './service/auth.service';
import { CreateCaseComponent } from './components/create-case/create-case.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { PostService } from './service/post.servise';
import { CaseCommentsComponent } from './components/case/case-comments/case-comments.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartService } from './service/charts.service';
import { SearchService } from './service/search.servise';
import { HighlightDirective } from './highlight.directive';
import { TopAukComponent } from './components/top-auk/top-auk.component';
import { ListService } from './service/list.service';
import { HomeBottomMenuComponent } from './components/home-bottom-menu/home-bottom-menu.component';
import { CallbackComponent } from './components/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderButtonComponent,
    HomeComponent,
    FooterContentComponent,
    BodyContentComponent,
    AuthComponent,
    RegistrComponent,
    CreateCaseComponent,
    InfoUserComponent,
    ChatComponent,
    HomeContentComponent,
    ChartsComponent,
    TopAukComponent,
    HomeBottomMenuComponent,
    CallbackComponent,
  ],
  imports: [
    ShareComponentModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ChartService,
    HttpService,
    RegistService,
    AuthService,
    PostService,
    SearchService,
    ListService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
