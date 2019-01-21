import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  @ViewChild("createEmployee") public createEmployeeForm = NgForm;
  formValues(firstName)
  {
    console.log(firstName);
  }

  Save(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
