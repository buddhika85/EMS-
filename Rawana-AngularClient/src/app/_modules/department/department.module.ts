import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { DepartmentEditComponent } from '../department/department-edit/department-edit.component';
import { DepartmentDetailEditGuard } from 'src/app/_guards/department-detail-edit.guard';


@NgModule({
  declarations: [
     DepartmentListComponent,    
     DepartmentEditComponent
    ],
  imports: [
    RouterModule.forChild([
      {path: 'departments', component:DepartmentListComponent},  
      {
        path : 'department/:id', 
        canActivate: [DepartmentDetailEditGuard],
        component: DepartmentEditComponent
      }        
    ]),
    SharedModule
  ]
})
export class DepartmentModule { }
