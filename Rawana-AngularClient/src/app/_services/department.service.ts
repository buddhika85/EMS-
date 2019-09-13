import { Injectable } from '@angular/core';
import { IDepartment } from '../_models/IDepartment';
import { Observable, throwError, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentAPIUrl : string = "http://localhost:62435//api//Department";
  constructor(private http : HttpClient) 
  {     
  }


  searchDepartments(searchStr : string) : Observable<IDepartment[]>
  {
    let searchQueryString = this.departmentAPIUrl + '/SearchDepartments';

    const params = new HttpParams().set('searchString', searchStr);

    //debugger
    return this.http.get<IDepartment[]>(searchQueryString, {params}).pipe(
      tap(data => {
        //console.log('All: ' + JSON.stringify(data));
        console.log('searched');
      }),
      catchError(this.handleError)
    );
  }


  getDepartmentById(id : number) : Observable<IDepartment>
  {
    let queryString = this.departmentAPIUrl + '/GetDepartmentById';
    const params = new HttpParams().set('id', id.toString());

    return this.http.get<IDepartment>(queryString, {params}).pipe(
      tap(data => {
        //console.log('Product: ' + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  saveDepartment(department : IDepartment) : Observable<any>
  {
    // department.IsSuccessful = true;
    // return of(department);

    let queryString = this.departmentAPIUrl + '/SaveDepartment';
    return this.http.post(queryString, department)
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }  
}
