import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private _auth: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  //form functions

  btnRegisterClick() {
    // console.log('btn register click');
    console.log(this.registerUserData);
  }
  registerFormSubmit() {
    console.log('register form submit');
    this._auth.registerUser(this.registerUserData).subscribe((res: any) => {
      console.log(res);
      this.dialog.closeAll();
    });
  }

  btnLoginClick() {
    // console.log('btn login click');
    // console.log(this.loginUserData);
  }
  loginFormSubmit() {
    console.log('login form submit');
    this._auth.loginUser(this.loginUserData).subscribe((res: any) => {
      console.log('=>>>>>>>>>>>' + res);
      localStorage.setItem('token', res['token']);
      this.dialog.closeAll();
      // window.location.reload();
      // console.log('from storage=>>>>>>>>> ' + localStorage.getItem('token'));
    });
  }

  //form functions
}
