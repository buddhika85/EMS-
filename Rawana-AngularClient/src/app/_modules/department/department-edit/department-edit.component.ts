import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/_models/IDepartment';
import { DepartmentService } from 'src/app/_services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  departmentId : number;  
  department : IDepartment = { Id : 0, Name : "", IsSuccessful : false, ErrorMessage : ''};
  errorMessage : string;
  pageTitle : string;

  constructor(private route : ActivatedRoute, private departmentService : DepartmentService,
    private router : Router) 
  {     
  }

  ngOnInit() 
  {    
    this.setUpForm(); 
  }

  setUpForm() : void 
  {
    this.departmentId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.errorMessage = '';

    this.departmentService.getDepartmentById(this.departmentId).subscribe(    

      result => {   
             
        if (result)
        {
          this.department = result;
          this.pageTitle =  `Edit Department - ${this.department.Name} - ${this.department.Id}`;
          this.errorMessage = ''; 
        }
        else if (this.departmentId > 0 && !result)
        {
          //debugger
          alert(`Invalid Department ID - ${this.departmentId}, redirecting to department list`);
          this.router.navigate(['/departments']);
        }
        else {
          //debugger
          this.department = { Id : 0, Name : "", IsSuccessful : false, ErrorMessage : ''};
          this.pageTitle =  `New Department`;
          this.errorMessage = ''; 
        }
      },
      error => {
        this.errorMessage = `Error - could not get employee details for employee Id ${this.departmentId}`;
        this.pageTitle =  '';
        console.log(this.errorMessage);
      }
    );
  }

  onFormSubmit(form : NgForm) : void
  {
    //debugger
    if (form.valid)
    {
      this.errorMessage = ''; 
      //debugger
      this.departmentService.saveDepartment(this.department).subscribe(

        result => 
        {
          if (result.IsSuccessful)
          {
            alert ("Success - Department saved");
            this.router.navigate(['/departments']);
          }
          else
          {
            debugger
            this.errorMessage = result.ErrorMessage;
          }
        },
        error => 
        {
          debugger
          this.errorMessage = "Error - Department was not saved"
        }
      );   
    }
    else 
    {
      console.log("Error - saving department");
    }
  }

  cancelChanges() : void
  {    
    this.setUpForm(); 
  }
}
