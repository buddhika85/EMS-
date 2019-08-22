import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../_models/IEmployee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  filteredEmployees: IEmployee[];  
  errorMessage : string;

  private _searchEmployeeString: string;
  public get searchEmployeeString(): string 
  {
    return this._searchEmployeeString;
  }
  public set searchEmployeeString(value: string) 
  {
    this._searchEmployeeString = value;
    this.searchEmployees();
  }

  constructor(private employeeService : EmployeeService)
  {     
  }

  ngOnInit() 
  {
    this.searchEmployeeString = '';
    this.errorMessage = '';
    this.searchEmployees();
  }

  searchEmployees() : void
  {
    this.employeeService.searchEmployees(this.searchEmployeeString).subscribe(
          
      result => {        
        //debugger    
          this.filteredEmployees = result;             
        },
        error => this.errorMessage = <any>error
      );
  }

  updateActiveStatus(id : number) : void
  {

  }
}
