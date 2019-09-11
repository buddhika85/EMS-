import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { DepartmentEditComponent } from '../department/department-edit/department-edit.component';


@NgModule({
  declarations: [
     DepartmentListComponent,    
     DepartmentEditComponent
    ],
  imports: [
    RouterModule.forChild([
      {path: 'departments', component:DepartmentListComponent},  
      {path : 'department/:id', component: DepartmentEditComponent}    
    ]),
    SharedModule
  ]
})
export class DepartmentModule { }
