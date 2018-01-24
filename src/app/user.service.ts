import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserService {

  //Set up the URL
  private url: string = 'http://localhost:3000/api/users';

//Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }
// Set up a simple Observable.
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: string): Observable<User> {
  return this.http.get<User>(this.url + `/view/${id}`);
}

}
