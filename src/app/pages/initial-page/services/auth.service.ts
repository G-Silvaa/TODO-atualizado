import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { User } from '../interfaces/Iuser';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 
  
  private isAuthenticated = false;
   

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    
  }

  getToken(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    return this.http.post<any>(`${environment.apiUrl}/Auth/login`, data).pipe(
      tap((response) => {
       
        if (response.accessToken) {
        
        }
      })
    );
  }

  login(email: string, password: string, token: string) {
    
      const data = {
        email: email,
        password: password
      };
    
   
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
      
    });
    
    return this.http.post<User[]>(`${environment.apiUrl}/Auth/login`, data, { headers })
    
  }


 
  //  isUserLoggedIn(): boolean {
  //   console.log('isAuthenticated:', this.teste);
  //   return this.teste;
  // }

 
}
