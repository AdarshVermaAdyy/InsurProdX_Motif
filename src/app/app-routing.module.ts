import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { InsurTableComponent } from './components/insur-table/insur-table.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register', component: RegistrationComponent},
  {path: 'insur-table', component: InsurTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
