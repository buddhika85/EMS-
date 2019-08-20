import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'employees', component: EmployeeListComponent},
      {path : 'employee/:id', component: EmployeeDetailComponent},
      {path : 'welcome', component: WelcomeComponent},
      {path : '', redirectTo : 'welcome', pathMatch : 'full'},
      {path : '**', redirectTo : 'welcome', pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
