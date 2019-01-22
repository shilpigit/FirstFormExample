import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../employee/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent) : boolean {
    
    if(component.createEmployeeForm.dirty)
    //if(component.flag == true)
    {
      return confirm("Are you sure you want to left this page");
    }
    return true;
  }
  
}
