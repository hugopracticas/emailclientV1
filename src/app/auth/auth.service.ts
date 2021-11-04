import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsernameAvailableResponse } from './auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  usernameAvailable(username: string){
    return this.http.post<UsernameAvailableResponse>('https://api.angular-email.com/auth/username',{
            username: username
        })
  }
}
