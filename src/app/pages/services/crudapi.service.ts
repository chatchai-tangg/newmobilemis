import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StaffAll } from '../models/staff-all';

@Injectable({
  providedIn: 'root'
})
export class CrudapiService {

  list: any;
  DataArr: any[] = [];

  base_path = 'http://203.158.144.140/APIchart/charts/Empall';

  constructor(public http: HttpClient) {
    // http.get<any[]>('http://203.158.144.140/APIchart/charts/Empall').subscribe(result => {
    //   this.DataArr = result;

    //   console.log(JSON.stringify(this.DataArr));
    // });
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getstr(): string {
    return "Hello BYE";
  }

  // getD(){
  //   this.http.get<any[]>('http://203.158.144.140/APIchart/charts/Empall').subscribe(result => {
  //     this.dData = result;
  // }

  //  // Get single student data by ID
  //  getItem(id): Observable {
  //   return this.http
  //     .get<Student>(this.base_path + '/' + id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // // Get students data
  // getList(): Observable<Student> {
  //   return this.http
  //     .get<Student>(this.base_path)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // feeddata(): Promise<any[]> {
  //   return this.http.get<any[]>("http://203.158.144.140/APIchart/charts/Empall")
  //     .toPromise()
  //     .catch()
  // }



}
