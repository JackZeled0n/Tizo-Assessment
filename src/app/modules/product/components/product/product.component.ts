import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  constructor(
    private productService: ProductService
  ) {}

  productsArray: IProduct[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
    .getProducts()
    .subscribe((data: IProduct[]) => {
      this.productsArray = data;
    });
  }

  updateStatusProduct(id: number): void {
    const product = this.productsArray.find(p => p.id === id);
    if (product) {
      product.active = false;

      this.productService.updateProduct(product).subscribe(() => {
        console.log('Campo actualizado correctamente');
      });
    }
  }

}
