import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ContactFormComponent } from './contact/contact-form.component';

const routes: Routes = [
  {path: '', redirectTo:'/list', pathMatch:'full'},
  {path:'employee', children:[
    {path: 'contact', component:ContactFormComponent},
    {path:'list', component:ListEmployeeComponent},
    {path:'create', component:CreateEmployeeComponent},
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
