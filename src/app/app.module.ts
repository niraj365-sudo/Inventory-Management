import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    AddStockComponent,
    ListStockComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
