import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';

import { DiagnoseComponent } from './diagnose/diagnose.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './report/report.component';
import { UsersService } from './users.service';
// import { HttpClientModule} from '@angular/common/http'
// import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    DiagnoseComponent,
    ReportComponent,
    
    //FormsModule ,
   
    // NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    // MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }