import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../../../core/interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  apiUrl = 'http://localhost:3000/categories';

  getCategory() {
    return this.http.get<ICategory[]>(this.apiUrl);
  }
}
