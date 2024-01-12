import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  apiUrl = 'http://localhost:3000/products';

  getProducts(): any {
    return this.http.get<any>(this.apiUrl);
  }

  updateProduct(product: any): any {
    return this.http.put( `${this.apiUrl}/${product.id}`, product)
  }
}
