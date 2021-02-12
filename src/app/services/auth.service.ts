import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //var
  // private _BASEURL: string = 'http://127.0.0.1:5000/api/';
  private _BASEURL: string = 'https://fmri-17.herokuapp.com/api/';
  //var
  constructor(private http: HttpClient) { }

  registerUser(data: object) {
    return this.http.post<any>(this._BASEURL + 'register', data);
  }

  loginUser(data: Users) {
    const headers_object = new HttpHeaders({
      Authorization: 'Basic ' + btoa(data.username + ':' + data.password),
    });
    // const headers_object = new HttpHeaders();
    // headers_object.append(
    //   ' Authorization',
    //   'Basic ' + btoa(data.username + ':' + data.password)
    // );
    // var headers_object = new HttpHeaders().set(
    //   'authorization',
    //   'Basic ' + btoa('username:password')
    // );
    // headers_object.append('Content-Type', 'application/json');
    // headers_object.append(
    //   'Authorization',
    //   'Basic ' + btoa('username:password')
    // );

    const httpOptions = {
      headers: headers_object,
    };
    console.log(httpOptions);
    console.log(data);
    return this.http.post(this._BASEURL + 'login', {}, httpOptions);
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }
}
