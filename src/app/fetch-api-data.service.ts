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

  private extractedResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
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
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    );
  };

  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.get(apiUrl + 'movies/', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public getOneMovie(movieTitle: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.get(apiUrl + 'movies/' + movieTitle, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public getDirector(name: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.get(apiUrl + 'movies/director/' + name, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public getGenre(genreName: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.get(apiUrl + 'movies/genre/' + genreName, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return this.http.get(apiUrl + 'users/' + username, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return this.http.get(apiUrl + 'movies/favorite/' + username, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public addToFavorites(movieId: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return this.http.post(`${apiUrl}${username}/${movieId}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public updateUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return this.http.put(apiUrl + username, userDetails, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };

  public deleteUser(): Observable<any> {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    return this.http.delete(apiUrl + `users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: "Bearer " + token,
        })
      }).pipe(
        map(this.extractedResponseData),
        catchError(this.handleError)
      )
  };

  public deleteFromFavorites(movieId: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return this.http.delete(apiUrl + username + movieId, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    }).pipe(
      map(this.extractedResponseData),
      catchError(this.handleError)
    )
  };
}

export class FetchApiDataService {

  constructor() { }
}
