import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ServicesComponent } from 'src/app/modules/services/services.component';
import { TeamComponent } from 'src/app/modules/team/team.component';
import { TipsComponent } from 'src/app/modules/tips/tips.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    TipsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    TipsComponent,
    ContactComponent
  ]
})
export class DefaultModule { }
