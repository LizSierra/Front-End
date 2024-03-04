import { Component } from '@angular/core';
import { UserModel } from '../../models/user';
import  { LoginModel } from '../model/login';
import { UserService } from '../services/user/user.service';

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
  LoginModel =  new LoginModel();
  /*email: string;*/
  constructor(public UserService: UserService) {}

  arrUser:any[] = [];
  users: any;
  idUser: string = "";
  arraNewUser: any[] = [];

  ngOnInit(): void {
    this.getUser();
    this.arrUser = [];
  }

  login() {
    console.log(this.UserModel._id);
    console.log(this.UserModel.strName);
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
