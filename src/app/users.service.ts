import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http:HttpClient) { }
  getData():Observable<any>
  {
    let url="http://127.0.0.100:5000/api/v1.0/users";
    let data = this.http.get(url)
    return data;
  }
}
