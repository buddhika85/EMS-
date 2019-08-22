import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ConvertBooleanToStringPipe } from './_pipes/convert-boolean-to-string.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    ConvertBooleanToStringPipe
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'employees', component: EmployeeListComponent},
      {path : 'employee-details/:id', component: EmployeeDetailComponent},
      {path : 'employee/:id', component: EmployeeEditComponent},
      {path : 'welcome', component: WelcomeComponent},
      {path : '', redirectTo : 'welcome', pathMatch : 'full'},
      {path : '**', redirectTo : 'welcome', pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
