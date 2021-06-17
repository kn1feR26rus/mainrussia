import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CasesComponent } from './pages/cases/cases.component';
import { AgencyComponent } from './pages/agency/agency.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { AboutComponent } from './pages/blogger/about/about.component'
import { DataService } from './shared/services/data.service';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  CasesComponent,
  AgencyComponent,
  ContactsComponent,
  BloggerComponent,
  AboutComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
