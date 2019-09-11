import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/_models/IDepartment';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  filteredDepartments : IDepartment[];
  errorMessage : string;

  private _searchDepartmentString : string;
  public get searchDepartmentString(): string 
  {
    return this._searchDepartmentString;
  }
  public set searchDepartmentString(value: string) 
  {
    this._searchDepartmentString = value;
    this.searchDepartments();
  }


  constructor(private departmentService : DepartmentService)
  { }

  ngOnInit() 
  {
    this.searchDepartmentString = '';
    this.errorMessage = '';
    this.searchDepartments();
  }

  searchDepartments() : void
  {
    this.departmentService.searchDepartments(this.searchDepartmentString).subscribe(
      result => {
        this.filteredDepartments = result;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
