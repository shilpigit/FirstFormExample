import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContactFormComponent } from './contact/contact-form.component';
//import { EmployeeModule } from './employee/employee.module';
// import { ListEmployeeComponent } from './employee/list-employee.component';
// import { CreateEmployeeComponent } from './employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent
    //ContactFormComponent
    // ListEmployeeComponent,
    // CreateEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
