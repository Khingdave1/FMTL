import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { ServicesComponent } from './modules/services/services.component';
import { TeamComponent } from './modules/team/team.component';
import { TipsComponent } from './modules/tips/tips.component';

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
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'team',
        component: TeamComponent,
        data: {
          title: 'Team',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'tips',
        component: TipsComponent
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
