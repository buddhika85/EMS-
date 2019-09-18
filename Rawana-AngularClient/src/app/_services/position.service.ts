import { Injectable } from '@angular/core';
import { IPosition } from '../_models/IPosition';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private positionAPIUrl : string = 'http://localhost:62435//api//Position';

  constructor(private http :  HttpClient) { }

  searchPositions(searchStr : string) : Observable<IPosition[]>
  {
    let searchQueryString = this.positionAPIUrl + '/SearchPositions';

    const params = new HttpParams().set('searchString', searchStr);

    //debugger
    return this.http.get<IPosition[]>(searchQueryString, {params}).pipe(
      tap(data => {
        //console.log('All: ' + JSON.stringify(data));
        console.log('searched');
      }),
      catchError(this.handleError)
    );
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
