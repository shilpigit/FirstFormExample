import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  // // {path:'employee', children:[
  // { path: 'contact', component: ContactFormComponent },
  // { path: 'list', component: ListEmployeeComponent },
  // { path: 'create', component: CreateEmployeeComponent },
  // // ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
