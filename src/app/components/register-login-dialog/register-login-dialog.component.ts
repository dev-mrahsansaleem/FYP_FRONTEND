import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-login-dialog',
  templateUrl: './register-login-dialog.component.html',
  styleUrls: ['./register-login-dialog.component.css'],
})
export class RegisterLoginDialogComponent implements OnInit {
  //var

  hide: boolean = true;

  // loginUserData = {
  //   username: '',
  //   password: '',
  // };
  loginUserData: Users = new Users();
  registerUserData: Users = new Users();

  // registerUserData = {
  //   username: '',
  //   password: '',
  //   cPassword: '',
  // };
  //var

  constructor(private _auth: AuthService, private route: Router) {}

  ngOnInit(): void {}

  //form functions

  btnRegisterClick() {
    console.log('btn register click');
    console.log(this.registerUserData);
  }
  registerFormSubmit() {
    console.log('register form submit');
    this._auth.registerUser(this.registerUserData).subscribe((res: any) => {
      console.log(res);
    });
  }

  btnLoginClick() {
    console.log('btn login click');
    // console.log(this.loginUserData);
  }
  loginFormSubmit() {
    console.log('login form submit');
    this._auth.loginUser(this.loginUserData).subscribe((res: any) => {
      // console.log(res['token']);
      localStorage.setItem('token', res['token']);
      window.location.reload();
      // console.log('from storage=>>>>>>>>> ' + localStorage.getItem('token'));
    });
  }

  //form functions
}
