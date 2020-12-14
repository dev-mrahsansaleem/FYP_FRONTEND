import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterLoginDialogComponent } from '../register-login-dialog/register-login-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openRegisterLoginDialog() {
    this.dialog.open(RegisterLoginDialogComponent);
  }

  ngOnInit(): void {}
}
