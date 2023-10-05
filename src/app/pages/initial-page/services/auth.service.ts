import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/app/environments/environment';
import { User } from '../interfaces/Iuser'





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  login(email: string, password: string, token: string) {
    const data = {
      email: email,
      password: password
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<User[]>(`${environment.apiUrl}/Auth/login`, data);
  }
}