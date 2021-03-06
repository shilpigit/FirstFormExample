import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ContactFormComponent } from '../contact/contact-form.component';
import { ListEmployeeComponent } from './list-employee.component';
import { CreateEmployeeComponent } from './create-employee.component';

const employeeRoute : Routes =[
    { path: 'contact', component: ContactFormComponent },
    { path: 'list', component: ListEmployeeComponent },
    { path: 'create', component: CreateEmployeeComponent }   
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(employeeRoute),
    CommonModule
  ],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
