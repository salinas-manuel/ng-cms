import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './user.service';
import { UsersPipe } from './users-pipe';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPipe,
    DashboardComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }