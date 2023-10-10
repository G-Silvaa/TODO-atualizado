import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { User } from '../interfaces/Iuser';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
   

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
        if (response && response.accessToken) {
          
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  login(email: string, password: string, token: string): Observable<any> {
    
      const data = {
        email: email,
        password: password
      };

      localStorage.setItem('isAuthenticated', 'true');
    
  
    return this.http.post<any>(`${environment.apiUrl}/Auth/login`, data).pipe(
      tap((response) => {
        if(response && response.accessToken){
          this.isAuthenticatedSubject.next(true)
        }
      })
    )
    
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false); 
  }
 
}
