import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contaTexto: string = ''; // Inicializado vazio

  constructor(private router: Router) {
    this.atualizarTextoDaConta();
  }

  atualizarTextoDaConta() {
    if (this.router.url === '/initialpage') {
      this.contaTexto = 'Não possui uma conta?';
    } else {
      this.contaTexto = 'Já possui uma conta?';
    }
  }

  trocarPagina() {
    if (this.router.url === '/initialpage') {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/initialpage']);
    }
  }
}
