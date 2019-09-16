import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../_services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../../_models/IEmployee';
import { IDepartment } from 'src/app/_models/IDepartment';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  emplopyeeId : number;
  employee : IEmployee = { Id : 0, FirstName :'', LastName : '', FullName : '', JoinedDateString : '', IsPermenent :false,
    IsFullTime :false, Salary: 0.0, IsActive: false, ManagerId : 0, DepartmentId: 0, PositionId:0, ManagerName: '', DepartmentName: '',
    JobTitle: '', IsFullTimeString: '', IsPermenentString: '', JoinedDateTime: new Date(), IsSuccessful : false, ErrorMessage : ''};
  pageTitle : string;
  errorMessage : string;
  departments : IDepartment[];
  managers : IEmployee[];

  constructor(private route: ActivatedRoute, private employeeService : EmployeeService, private departmentService : DepartmentService) { }

  ngOnInit() 
  {
    this.emplopyeeId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    //debugger
    if (this.emplopyeeId != null && this.emplopyeeId == 0)
    {
        this.pageTitle =  'Add New Employee';
        this.errorMessage = '';
    }
    else
    {
      this.employeeService.getEmployeeById(this.emplopyeeId).subscribe(

        result => {
          this.employee = result;
          this.pageTitle =  `Edit - ${this.employee.FullName} - ${this.employee.Id}`;
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = `Error - could not get employee details for employee Id ${this.emplopyeeId}`;
          this.pageTitle =  '';
          console.log(this.errorMessage);
        }
      );
    }

    this.departmentService.searchDepartments('').subscribe(
      result => {
        this.departments = result;
        let first : IDepartment = { Id : 0, Name : "---- select ----", IsSuccessful : false, ErrorMessage : ''};
        this.departments.unshift(first);
      },
      error => {
        alert("Error - In getting all departments");
        this.errorMessage = <any>error;
      }
    );

    this.employeeService.searchEmployees('').subscribe(
      result => {        
        this.managers = result;
        let first : IEmployee = { Id : 0, FirstName :'', LastName : '', FullName : '---- select ----', JoinedDateString : '', IsPermenent :false,
        IsFullTime :false, Salary: 0.0, IsActive: false, ManagerId : 0, DepartmentId: 0, PositionId:0, ManagerName: '', DepartmentName: '',
        JobTitle: '', IsFullTimeString: '', IsPermenentString: '', JoinedDateTime: new Date(), IsSuccessful : false, ErrorMessage : ''};
        this.managers.unshift(first);
      },
      error => {
        alert("Error - In getting all managers");
        this.errorMessage = <any>error;
      }
    );
  }

}
