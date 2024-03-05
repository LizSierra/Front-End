import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from 'src/app/model/user';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  UserModel = new UserModel();
  users: UserModel = new UserModel();
  formData = new FormGroup({
    strName: new FormControl(this.UserModel.strName, [Validators.required, Validators.maxLength(50)]),
    strEmail: new FormControl(this.UserModel.strEmail, [Validators.required, Validators.email]),
    nmbAge: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    nmbPhone: new FormControl(this.UserModel.nmbPhone, [Validators.required, Validators.minLength(7)]),
    password: new FormControl(this.UserModel.password, [Validators.required, Validators.maxLength(50)])
  });
  constructor(private UserService: UserService, private router: Router) { }

  addNewUser(data: any){
    console.log(this.UserModel);
    if (!data.valid) {
      Toast.fire({
        title:'Revisa todos tus campos',
        icon: 'error',
        iconColor: '#473138'}); 
    }
    else {
  //   this.UserService.addUsers(this.users).then((resp: any) => {
    // this.router.navigate(['/']);
    Toast.fire({
      title:'Usuario registrado correctamente',
      icon: 'success',
      iconColor: '#473138'});      

  // }).catch((err) => {
  //   Toast.fire({
  //   icon: 'error',
  //   title: err.error.msg
  //   });
  // });
    }
  }
}
