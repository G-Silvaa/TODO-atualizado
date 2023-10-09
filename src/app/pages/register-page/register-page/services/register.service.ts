import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { UserRegister } from '../interfaces/IuserRegister';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(email: string, name: string, password: string , passwordConfirm:string ){
    const data = {
      email: email,
      name: name,
      password: password,
      passwordConfirm: passwordConfirm
    }

    return this.http.post<UserRegister>(`${environment.apiUrl}/Auth/register`,data)
  }
}
