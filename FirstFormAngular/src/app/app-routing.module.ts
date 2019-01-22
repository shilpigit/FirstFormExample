import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateService } from './service/can-deactivate.service';

const routes: Routes = [

  //{ path: '', redirectTo: '/list', pathMatch: 'full' }, 
  {path:'employee', loadChildren:'./employee/employee.module#EmployeeModule'}
  // // {path:'employee', children:[
  // { path: 'contact', component: ContactFormComponent },
  // { path: 'list', component: ListEmployeeComponent },
  // { path: 'create', component: CreateEmployeeComponent },
  // // ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateService]
})
export class AppRoutingModule { }
