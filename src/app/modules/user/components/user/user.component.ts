import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../../../product/components/add-product/add-product.component';
import { UserService } from '../../services/user.service';
import { IUser } from '../../../../core/interfaces/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, AddProductComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {}

  userArray: IUser[] = [];
  filteredUser: IUser[] = [];
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
    .getUsers()
    .subscribe((data: IUser[]) => {
      this.userArray = data;
      this.filteredUser = data;
    });
  }

  onSearch(searchTerm: string | undefined) {
    if (searchTerm === undefined) {
      this.filteredUser = this.userArray;
    } else {
      this.filteredUser = this.userArray.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
