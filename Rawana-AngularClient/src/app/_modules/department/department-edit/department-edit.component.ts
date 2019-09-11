import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/_models/IDepartment';
import { DepartmentService } from 'src/app/_services/department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  departmentId : number;
  department : IDepartment;
  errorMessage : string;
  pageTitle : string;

  constructor(private route : ActivatedRoute, private departmentService : DepartmentService) 
  {     
  }

  ngOnInit() 
  {
    this.departmentId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentService.getDepartmentById(this.departmentId).subscribe(

      result => {
        this.department = result;
        this.pageTitle =  `Edit Department - ${this.department.Name} - ${this.department.Id}`;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = `Error - could not get employee details for employee Id ${this.departmentId}`;
        this.pageTitle =  '';
        console.log(this.errorMessage);
      }
    );
  }

}
