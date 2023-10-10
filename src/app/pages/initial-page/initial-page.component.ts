import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';
import { HeaderComponent } from 'src/app/freatures/header/header.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  isAuthenticated = false;
  

  

  constructor(private authService: AuthService, private router: Router) {}

  UserForm!: FormGroup;
  msg = msg;

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    

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
    

    this.authService.getToken(email, password).subscribe(
      (data) => {
        if (data.accessToken) { 
          const token = data.accessToken;
    
          this.authService.login(email, password, token).subscribe(
            (data) => {
              this.router.navigate(['/content']);
              console.log(data);
            }
          )
        }
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

