import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
{
  path: 'template-form',
  component: TemplateDrivenComponent
},
{
  path: 'reactive-form',
  component: ReactiveFormComponent
},
{
  path: 'list-employees',
  component: ListEmployeesComponent
},
{
  path: 'edit-template-form/:name',
  component: TemplateDrivenComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
