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
    if (this.LoginModel.email == '' || this.LoginModel.password == '') {
      Swal.fire({
            icon: 'warning',
            title: 'Revisa que ambos campos incluyan datos'
            });
    } else {
      this.getUser();
    }
   
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
      
      this.users = user;
      //console.log("user", this.users);
      
      for (const user of this.users){
        let element = [

          user.strName.replace(/\:null/gi,':""'),
          user.strEmail.replace(/\:null/gi,':""'),
          user.password.replace(/\:null/gi,':""'),
          user.nmbPhone.replace(/\:null/gi,':""'),
          user.nmbAge,
          user.blnActivo ? 'Sí' : 'No',
        ];
        this.arrUser.push(element);
        this.arraNewUser = this.arrUser;
      }
    }).catch((err: any) => {
      
      Toast.fire({
            icon: 'error',
            title: err.error
            });
      this.users = [];
    });
  }
}
