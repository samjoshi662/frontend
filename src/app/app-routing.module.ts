import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeywordComponent } from './keyword/keyword.component';
import { LoginComponent } from './login/login.component';
import { SanctionPageComponent } from './SanctionPage/SanctionPage.component';
import { AuthguardService } from './services/Authguard/authguard.service';

const routes: Routes = [
  {
    path : 'sanction',
    component : SanctionPageComponent,
    canActivate:[AuthguardService] 
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    component : DashboardComponent,
    canActivate:[AuthguardService] 
  },
  {
    path : 'keyword',
    component : KeywordComponent,
    canActivate:[AuthguardService] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SanctionPageComponent]