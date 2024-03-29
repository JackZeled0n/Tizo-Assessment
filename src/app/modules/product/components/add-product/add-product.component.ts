import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../category/services/category.service';
import { ICategory } from '../../../../core/interfaces/categories';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { uid } from 'uid';
import { IProduct } from '../../../../core/interfaces/products';
import { ProductService } from '../../services/product.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  category: ICategory[] = [];
  product: IProduct[] = [];

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private modalService: ModalService
  ) {
    this.addProductForm = this.formBuilder.group({
      name: '',
      active: '',
      categoryId: '',
    });
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): any {
    this.categoryService.getCategory().subscribe((data: ICategory[]) => {
      this.category = data;
    });
  }

  onSubmit() {
    const valoresFormulario = this.addProductForm.value;
    const value = {
      ...valoresFormulario,
      id: uid(),
      active: valoresFormulario.active ? valoresFormulario.active : false,
    };

    if (valoresFormulario) {
      this.productService.saveProduct(value).subscribe({
        next: (response) => {
          console.log('Product saved', response);
          this.closeModal();
          this.modalService.notifySuccess('addProduct');

        },
        error: (error) => {
          console.error('Error saving product', error);
          this.closeModal();
        },
      });
    }
  }

  closeModal() {
    this.modalService.closeModal('addProduct');
  }
}
