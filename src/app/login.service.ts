import { Injectable } from '@angular/core';
import{HttpClient,HttpParams}from '@angular/common/http';
import{detail}from './detail';
import { SaveUserResponse } from './SaveUserResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  AddUser(detail: detail) {   
    return this.http.post("http://localhost:18553/api/user", detail).subscribe(
    (res: SaveUserResponse) => {
    if (!res.IsSuccessful) {
     alert( "it is not valid");
    }
    return res;
    })
    }

   
  
}
