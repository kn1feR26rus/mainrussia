import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './pages/agency/agency.component';
import { AboutComponent } from './pages/blogger/about/about.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: BloggerComponent, data: { breadcrumb: 'bloggers'} },
  { path: 'cases', component: CasesComponent, data: { breadcrumb: 'cases'} },
  { path: 'agency', component: AgencyComponent, data: { breadcrumb: 'agency'} },
  { path: 'contacts', component: ContactsComponent, data: { breadcrumb: 'contacts'} },
  { path: 'about/:id', component: AboutComponent, data: { breadcrumb: 'about'} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
