import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { FinanceComponent } from './modules/finance/finance.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { InvestmentsComponent } from './modules/investments/investments.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'finance',
        component: FinanceComponent,
        data: {
          title: 'Finance',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projects',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'investments',
        component: InvestmentsComponent,
        data: {
          title: 'Investments',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          description: 'Description Meta Tag Content'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
