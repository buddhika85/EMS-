import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDetailEditGuard implements CanActivate 
{
  constructor(private router : Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    debugger
    let departmentId = Number.parseInt(next.url[1].path);
    if (isNaN(departmentId) || departmentId < 0)
    {     
      debugger 
      alert(`Invalid Department with ID - ${departmentId}, redirecting to department list`);
      this.router.navigate(['/departments']);
      return false;
    }
    else
    {
      return true;
    }
  }
}
