import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = 'https://charlese-movieapp-71f7e695f2c4.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  constructor(private http: HttpClient) { }

  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  };

  public userLogin(userDetails: any): Observable<any> {

  };

  public getAllMovies(userDetail: any): Observable<any> {

  };

  public getOneMovie(userDetails: any): Observable<any> {

  };

  public getDirector(userDetails: any): Observable<any> {

  };

  public getGenre(userDetails: any): Observable<any> {

  };

  public getUser(userDetails: any): Observable<any> {

  };

  public getFavoriteMovies(userDetails: any): Observable<any> {

  };

  public addToFavorites(userDetails: any): Observable<any> {

  };

  public updateUser(userDetails: any): Observable<any> {

  };

  public deleteUser(userDetails: any): Observable<any> {

  };

  public deleteFromFavorites(userDetails: any): Observable<any> {

  };

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

export class FetchApiDataService {

  constructor() { }
}
