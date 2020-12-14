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
}
