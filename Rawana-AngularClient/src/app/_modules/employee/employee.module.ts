import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from '../employee/employee-edit/employee-edit.component';

import { EmployeeDetailEditGuard } from '../../_guards/employee-detail-edit.guard';
import { ConvertBooleanToStringPipe } from '../../_pipes/convert-boolean-to-string.pipe';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    ConvertBooleanToStringPipe
  ],
  imports: [     
      RouterModule.forChild([
        {path : 'employees', component: EmployeeListComponent},
        { 
          path : 'employee-details/:id', 
          canActivate : [EmployeeDetailEditGuard],
          component: EmployeeDetailComponent  
        },
        {path : 'employee/:id', component: EmployeeEditComponent}
      ]),
      SharedModule
  ]
})
export class EmployeeModule { }
