import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlphabetsDirective } from './directives/alphabets.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    ListEmployeesComponent,
    AlphabetsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
