import { Component, OnInit } from '@angular/core';
import { navbarData } from './navData';
import { Router } from '@angular/router';


@Component({
  selector: 'teste-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
 collapsed = true;
 navData = navbarData;
 nomeDoUsuario!: string;

 constructor(private router:Router) {}
  ngOnInit(): void {
    let nomeArmazenado = localStorage.getItem('name');

    if(nomeArmazenado) {
      this.nomeDoUsuario = nomeArmazenado;
    }
  }

 closeSidenav(): void {
  this.collapsed = !this.collapsed;
 }

 logout() {
  localStorage.removeItem('isAuthenticated');
  this.router.navigate(['/initialpage'])
 }


}
