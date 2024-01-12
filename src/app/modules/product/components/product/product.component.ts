import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

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

  productsArray: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
    .getProducts()
    .subscribe((data: any) => {
      this.productsArray = data;
    });
  }

  updateStatusProduct(id: any): void {
    const product = this.productsArray.find((p: { id: any; }) => p.id === id);
    if (product) {
      product.status = false;
    }

    this.productService.updateProduct(product).subscribe(() => {
      console.log('Campo actualizado correctamente');
    });
  }

}
