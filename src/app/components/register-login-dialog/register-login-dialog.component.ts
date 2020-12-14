import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-login-dialog',
  templateUrl: './register-login-dialog.component.html',
  styleUrls: ['./register-login-dialog.component.css'],
})
export class RegisterLoginDialogComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  //form functions

  loginFormSubmit() {
    console.log('btn login form submit');
  }
  btnLoginClick() {
    console.log('btn login clicked');
  }

  registerFormSubmit() {
    console.log('btn register form submit');
  }
  btnRegisterClick() {
    console.log('btn register clicked');
  }
  //form functions
}
