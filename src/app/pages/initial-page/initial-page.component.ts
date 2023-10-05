import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';
import { HeaderComponent } from 'src/app/freatures/header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  UserForm!: FormGroup;
  msg = msg;

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit() {
    this.headerComponent.atualizarTextoDaConta('Não Possui uma conta?');
  }

  get email() {
    return this.UserForm.get('email')!;
  }

  get password() {
    return this.UserForm.get('password')!;
  }

  submit() {
    if (this.UserForm.invalid) {
      return;
    }
    const email = this.email.value;
    const password = this.password.value;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6Ijg3ODk3MmE1LTliMWItNDAxZi1hMDZmLTJlNjY4NWNlYjI5YyIsIm5hbWUiOiJnZW5pbHRvbiIsImVtYWlsIjoiZ25ld3RvbkBnbWFpbC5jb20iLCJqdGkiOiJlYTM0OWY5Ni1mODRiLTQyMTEtYjhkMy1jOTA2ZDA2MTdmZDMiLCJuYmYiOjE2OTY1MzkxMDQsImlhdCI6MTY5NjUzOTEwNCwiZXhwIjoxNjk2NTQyNzA0LCJpc3MiOiJodHRwczovL2FwaS50b2RvLm1hcmFjYW5hdS5pZmNlLmVkdS5iciIsImF1ZCI6Imh0dHBzOi8vYXBpLnRvZG8ubWFyYWNhbmF1LmlmY2UuZWR1LmJyIn0.oaaqw9T8_3hS_0X87jvwKDQnlMWN-Dbfr3_eJaLDGP8'

    this.authService.login(email, password, token).subscribe(
      (data) => {
        this.router.navigate(['/content']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Conta inexistente',
        })
      }
    );
  }
}
