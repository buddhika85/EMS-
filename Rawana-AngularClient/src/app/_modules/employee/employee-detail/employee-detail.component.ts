import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../_services/employee.service';
import { IEmployee } from '../../../_models/IEmployee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
        this.pageTitle =  `Details - ${this.employee.FullName} - ${this.employee.Id}`;
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
