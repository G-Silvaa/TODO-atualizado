import { Component } from '@angular/core';
import { navbarData } from './navData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 collapsed = true;
 navData = navbarData;

 closeSidenav(): void {
  this.collapsed = !this.collapsed;
 }
}
