import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
