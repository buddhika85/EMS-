import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../_models/IEmployee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  emplopyeeId : number;
  employee : IEmployee;
  pageTitle : string;
  errorMessage : string;

  constructor(private route: ActivatedRoute, private employeeService : EmployeeService) { }

  ngOnInit() 
  {
    this.emplopyeeId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
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

}
