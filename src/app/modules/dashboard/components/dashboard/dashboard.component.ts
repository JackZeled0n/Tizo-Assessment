import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../../../product/components/product/product.component'; 
import { CategoryComponent } from '../../../category/components/category/category.component';
import { UserComponent } from '../../../user/components/user/user.component';
import { AuthenticationService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterOutlet, ProductComponent, CategoryComponent, UserComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  products(): void {
    this.router.navigate(['/dashboard/product'])
  }

  categories(): void {
    this.router.navigate(['/dashboard/category'])
  }

  users(): void {
    this.router.navigate(['/dashboard/user'])
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

}
