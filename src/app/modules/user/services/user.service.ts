import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../../core/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  apiUrl = 'http://localhost:3000/user';

  getUsers() {
    return this.http.get<IUser[]>(this.apiUrl);
  }

}
