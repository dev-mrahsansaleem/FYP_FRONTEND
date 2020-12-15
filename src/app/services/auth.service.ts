import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //var
  private _BASEURL = 'http://127.0.0.1:5000/api/';
  //var
  constructor(private http: HttpClient) {}

  registerUser(data: object) {
    return this.http.post<any>(this._BASEURL + 'register', data);
  }

  loginUser(data: Users) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(data.username + ':' + data.password),
    });
    // headers.append(
    //   'Authorization',
    //   'Basic Auth' + btoa(data.username + ':' + data.password)
    // );
    return this.http.get(this._BASEURL + 'login', { headers });
  }
}
