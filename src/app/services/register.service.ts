import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable()
export class RegisterService {

  constructor(private http:HttpClient){}
  
  postRegisterUser (id: string, name: string, email: string) {
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const requestBody = {
        'id': id,
        'name': name,
        'email': email
    }

    return this.http.post('https://vttp-csf-backend.herokuapp.com/csf/assignments/register', requestBody, { headers: headers } )
  }

}