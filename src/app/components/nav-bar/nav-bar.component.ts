import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterLoginDialogComponent } from '../register-login-dialog/register-login-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  showButton: boolean = false;
  token: any = '';

  constructor(private _auth: AuthService, public dialog: MatDialog) {}

  openRegisterLoginDialog() {
    this.dialog.open(RegisterLoginDialogComponent);
  }
  logoutClick() {
    console.log('logout');
    localStorage.removeItem('token');
    // console.log('=?>>>>>>>>>>>>>>> logout' + this.token);
    window.location.reload();
  }
  ngOnInit(): void {
    this.showButton = this._auth.loggedIn();
    // this.token = localStorage.getItem('token');
    // console.log('=?>>>>>>>>>>>>>>>' + this.token);
  }
}
