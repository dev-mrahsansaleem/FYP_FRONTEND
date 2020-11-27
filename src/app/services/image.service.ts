import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  baseURL: string = 'http://127.0.0.1:5000';

  postImage(formData: FormData) {
    return this.http.post(this.baseURL + '/api/uploadImage', formData);
    // return this.http.post(this.baseURL, formData);
  }

  constructor(private http: HttpClient) {}
}
