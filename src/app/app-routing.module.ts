import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import{ RegisterComponent}from './register/register.component';
import { LoginComponent} from './login/login.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DiagnoseComponent} from './diagnose/diagnose.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'report',
  component:ReportComponent
},
{
path:'login',
component:LoginComponent
},
{
path:'about',
component:AboutComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'diagnose',
  component:DiagnoseComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
