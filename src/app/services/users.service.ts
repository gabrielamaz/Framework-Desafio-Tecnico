import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.postsUrl);
  }

  getUser(userId: number) : Observable<User> {
    return this.http.get<User>(this.postsUrl + '/' + userId)
  }
}
