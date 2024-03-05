import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { UserModel } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `${environment.urlLocal}api/users`;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/`).toPromise();
  }
  
  getUsersId(idUser: String) {
    return this.http.get(`${this.url}/get/${idUser}`).toPromise();
   }
   
   addUsers(user: UserModel) {
     return this.http.post(`${this.url}/add`, user).toPromise();
   }

   /*actualizarPlatillos(idPlatillo: String, platillo: PlatilloModel) {
     return this.http.put(`${this.url}/modificar/${idPlatillo}`, platillo ).toPromise();
   }
   eliminarPlatillos(idPlatillo: String) {
    return this.http.patch(`${this.url}/eliminar/${idPlatillo}`,{} ).toPromise();
  }
  /
   */
}
