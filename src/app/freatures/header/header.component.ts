import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contaTexto = '';
  paginaLink: string = "/register";

  constructor(private router: Router) {}

  atualizarTextoDaConta(palavra: string) {
    this.contaTexto = palavra;
  }

  navegarParaPagina(pagina: string) {
    this.router.navigate([pagina]);
  }
}
