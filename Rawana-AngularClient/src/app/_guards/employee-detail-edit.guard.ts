import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailEditGuard implements CanActivate
{

  constructor(private router : Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    //debugger
    let employeeId = Number.parseInt(next.url[1].path);
    if (isNaN(employeeId) || employeeId <= 0)
    {      
      alert(`Invalid Employee ID - ${employeeId}, redirecting to employees list`);
      this.router.navigate(['/employees']);
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
