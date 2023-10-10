import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { User } from '../interfaces/Iuser';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 
  
 
   

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    
  }


  getToken(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    return this.http.post<any>(`${environment.apiUrl}/Auth/login`, data)
  }

  login(email: string, password: string, token: string): Observable<any> {
    
      const data = {
        email: email,
        password: password
      };

      localStorage.setItem('isAuthenticated', 'true');
    
  
    return this.http.post<any>(`${environment.apiUrl}/Auth/login`, data).pipe(
      map((response) => {
        localStorage.setItem('name',response.user.name)
      })
    )
    
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
     
  }
 
}
