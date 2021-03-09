import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  //var
  // private _BASEURL: string = 'http://127.0.0.1:5000/api/';
  private _BASEURL: string = 'https://fmri-17.herokuapp.com/api/';
  //var
  constructor(private http: HttpClient) { }

  postImage(formData: FormData) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('x-access-token', token);
      headers.append("Access-Control-Allow-Origin", "*");
      return this.http.post<any>(this._BASEURL + 'sendImage', formData, {
        headers,
      });
    }
    return;
  }

  getHistory() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('x-access-token', token);
      return this.http.get<any>(this._BASEURL + 'history', {
        headers,
      });
    }
    return;
  }
}
