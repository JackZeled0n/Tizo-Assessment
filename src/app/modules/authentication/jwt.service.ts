import { Injectable } from '@angular/core';
import { IUser } from '../../core/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  createMockJWT(userData: Pick<IUser, "username" | "password">): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const base64UrlEncode = (obj: object): string => {
      const json = JSON.stringify(obj);
      const base64 = btoa(json);
      return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    };

    const encodedHeader = base64UrlEncode(header);
    const encodedData = base64UrlEncode(userData);

    return `${encodedHeader}.${encodedData}`;
  }
}