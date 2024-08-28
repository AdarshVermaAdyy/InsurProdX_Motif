import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { InsurTableComponent } from './components/insur-table/insur-table.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[authGuard]},
  {path:'product-details', component: ProductDetailsComponent},
  {path: 'insur-table', component: InsurTableComponent},
  {path:'grid',component:ContainerComponent},
  {path:'**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
