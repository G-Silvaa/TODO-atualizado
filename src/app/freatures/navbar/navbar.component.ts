import { Component } from '@angular/core';
import { navbarData } from './navData';
import { AuthGuard } from 'src/app/_guard/autorizado.guard';

@Component({
  selector: 'teste-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 collapsed = true;
 navData = navbarData;
  isAuthenticatedSubject: any;

 closeSidenav(): void {
  this.collapsed = !this.collapsed;
 }

 logout() {
  // Remova o indicador de autenticação do localStorage
  localStorage.removeItem('isAuthenticated');
  this.isAuthenticatedSubject.next(false); 
}
}
