import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../../core/interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  apiUrl = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  saveProduct(product: IProduct) {
    return this.http.post(`${this.apiUrl}`, product);
  }

  updateProduct(product: IProduct) {
    return this.http.put( `${this.apiUrl}/${product.id}`, product)
  }
}
