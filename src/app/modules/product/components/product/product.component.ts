import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../../core/interfaces/products';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AddProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  filteredProducts: IProduct[] = [];

  constructor(
    private productService: ProductService
  ) {}

  productsArray: IProduct[] = [];
  @ViewChild(AddProductComponent) addProductComponent: AddProductComponent | undefined;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
    .getProducts()
    .subscribe((data: IProduct[]) => {
      this.productsArray = data;
      this.filteredProducts = data;
    });
  }

  updateStatusProduct(id: number): void {
    const product = this.productsArray.find(p => p.id === id);
    if (product) {
      product.active = product.active ? false : true;

      this.productService.updateProduct(product).subscribe(() => {
        console.log('Campo actualizado correctamente');
      });
    }
  }

  onSearch(searchTerm: string | undefined) {
    if (searchTerm === undefined) {
      this.filteredProducts = this.productsArray;
    } else {
      this.filteredProducts = this.productsArray.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  openModal() {
    this.addProductComponent?.openModal();
  }
}
