import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate: [authGuard] },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'addStock', component:AddStockComponent},
  {path:'listStock', component:ListStockComponent},

  
  
  
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
