import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ContactFormComponent } from '../contact/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
