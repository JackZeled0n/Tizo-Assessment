import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../../../core/interfaces/categories';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categories: ICategory[] = [];
  filteredCategories: ICategory[] = [];

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): any {
    this.categoryService.getCategory().subscribe((data: ICategory[]) => {
      this.categories = data;
      this.filteredCategories = data;
    });
  }

  onSearch(searchTerm: string | undefined) {
    if (searchTerm === undefined) {
      this.filteredCategories = this.categories;
    } else {
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
