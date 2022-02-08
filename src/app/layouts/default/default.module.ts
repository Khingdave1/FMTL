import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FinanceComponent } from 'src/app/modules/finance/finance.component';
import { ProjectsComponent } from 'src/app/modules/projects/projects.component';
import { InvestmentsComponent } from 'src/app/modules/investments/investments.component';
import { TeamComponent } from 'src/app/modules/team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    FinanceComponent,
    ProjectsComponent,
    InvestmentsComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DefaultComponent,
    HomeComponent,
    FinanceComponent,
    ProjectsComponent,
    InvestmentsComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent
  ]
})
export class DefaultModule { }
