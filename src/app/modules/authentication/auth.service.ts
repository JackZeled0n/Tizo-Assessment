import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService;

  constructor(private jwtService: JwtService, jwtHelper: JwtHelperService) {
    this.jwtHelper = jwtHelper;
  }

  login(username: string, password: string) {
    //validate agains database is the user exist and credentials are valid
    const mockToken = this.jwtService.createMockJWT({ username, password });
    localStorage.setItem('token', mockToken);
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } 
    return false;
    // return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
}