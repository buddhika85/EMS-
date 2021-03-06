import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { EmployeeModule } from './_modules/employee/employee.module';
import { DepartmentModule } from './_modules/department/department.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [

    BrowserAnimationsModule,     

    EmployeeModule,    
    DepartmentModule,
    RouterModule.forRoot([
      
      {path : 'welcome', component: WelcomeComponent},
      {path : '', redirectTo : 'welcome', pathMatch : 'full'},
      {path : '**', redirectTo : 'welcome', pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
