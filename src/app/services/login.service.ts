import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = `${environment.urlLocal}api/login`;

  constructor(private http: HttpClient) { }

  UserLogin(user: LoginModel) {
    return this.http.post(`${this.url}/`, user).toPromise();
   }

   
}
