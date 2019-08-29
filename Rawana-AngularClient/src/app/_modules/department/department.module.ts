import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { DepartmentDetailComponent } from '../department/department-detail/department-detail.component';
import { DepartmentEditComponent } from '../department/department-edit/department-edit.component';


@NgModule({
  declarations: [
     DepartmentListComponent,
     DepartmentDetailComponent,
     DepartmentEditComponent
    ],
  imports: [
    RouterModule.forChild([
      {path: 'departments', component:DepartmentListComponent},      
    ]),
    SharedModule
  ]
})
export class DepartmentModule { }
