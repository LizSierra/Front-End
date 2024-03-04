import { Component } from '@angular/core';
import { UserModel } from '../../models/user';
import  { LoginModel } from '../model/login';
import { UserService } from '../services/user/user.service';
import { EmpleadoModel } from '../model/empleado';
import { Empleadoservice } from '../services/empleado/empleado.service';
/* SWEET ALERT */
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  UserModel = new UserModel();
  EmpleadoModel = new EmpleadoModel();
  LoginModel =  new LoginModel();
  /*email: string;*/
  constructor(public UserService: UserService, public EmpleadoService: Empleadoservice) {}

  arrUser:any[] = [];
  users: any;
  idUser: string = "";
  arraNewUser: any[] = [];
  arrEmpleado:any[] = [];
  empleados: any;
  idEmpleado: string = "";
  arrNewEmpleado: any[] = [];

  ngOnInit(): void {
    this.getEmpleado();
    this.arrEmpleado = [];
  }

  login() {
    console.log(this.UserModel._id);
    console.log(this.UserModel.strName);
  }

  getEmpleado() {
    this.arrEmpleado = [];
    this.EmpleadoService.getEmpleados().then((empleado: any) => {
      
      this.empleados = empleado;
      
      for (const empleado of this.empleados){
        let element = [

          empleado.name.replace(/\:null/gi,':""'),
          empleado.position.replace(/\:null/gi,':""'),
          empleado.office.replace(/\:null/gi,':""'),
          empleado.salary,
          empleado.blnActivo ? 'Sí' : 'No',
        ];
        this.arrEmpleado.push(element);
        this.arrNewEmpleado = this.arrEmpleado;
      }
    }).catch((err: any) => {
      
      Toast.fire({
            icon: 'error',
            title: err.error
            });
      this.empleados = [];
      
    });
  }

  getUser() {
    this.arrUser = [];
    this.UserService.getUsers().then((user: any) => {
      
      this.users = user.cont;
      
      for (const user of this.users){
        let element = [

          user.idCategoria,
          user.name.replace(/\:null/gi,':""'),
          user.email.replace(/\:null/gi,':""'),
          user.phone,
          user.age,
          //platillo.blnActivo ? 'Sí' : 'No',
        ];
        this.arrUser.push(element);
        this.arraNewUser = this.arrUser;
      }
    }).catch((err: any) => {
      
      Toast.fire({
            icon: 'error',
            title: err.error.msg
            });
      this.users = [];
    });
  }
}
