import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  //var
  private _BASEURL: string = 'http://127.0.0.1:5000/api/';
  //var
  constructor(private http: HttpClient) {}

  postImage(formData: FormData) {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('x-access-token', token);
      return this.http.post<any>(this._BASEURL + 'Image', formData, {
        headers,
      });
    }
    return empty();
  }
}
