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
  showProgressBar: Boolean = false;

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

  constructor(private _auth: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void { }

  //form functions

  btnRegisterClick() {
    // console.log('btn register click');
    console.log(this.registerUserData);
  }
  registerFormSubmit() {
    this.showProgressBar = true;
    console.log('register form submit');
    this._auth.registerUser(this.registerUserData).subscribe((res: any) => {
      console.log(res);
      this.showProgressBar = false;
      this.dialog.closeAll();
    });
  }

  btnLoginClick() {
    // console.log('btn login click');
    // console.log(this.loginUserData);
  }
  loginFormSubmit() {
    // console.log('login form submit');
    this.showProgressBar = true;

    this._auth.loginUser(this.loginUserData).subscribe((res: any) => {
      // console.log('=>>>>>>>>>>>' + res);
      sessionStorage.setItem('token', res['token']);
      this.showProgressBar = false;
      this.dialog.closeAll();
      window.location.reload(); //add it later for home screen refresh
      // console.log('from storage=>>>>>>>>> ' + sessionStorage.getItem('token'));
    });
  }

  //form functions
}
