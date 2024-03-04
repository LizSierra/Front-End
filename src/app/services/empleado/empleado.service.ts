import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { EmpleadoModel } from 'src/app/model/empleado';

@Injectable({
  providedIn: 'root'
})
export class Empleadoservice {
  url = `${environment.urlLocal}empleado`;

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.url}/`).toPromise();
  }
  
  getEmpleadosId(idEmpleado: String) {
    return this.http.get(`${this.url}/get/${idEmpleado}`).toPromise();
   }
   
   addEmpleados(empleado: EmpleadoModel) {
     return this.http.post(`${this.url}/add`, empleado).toPromise();
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
