import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';
import { HeaderComponent } from 'src/app/freatures/header/header.component';
import { Router } from '@angular/router';
import { RegisterService } from './services/register.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
 
  constructor(private router: Router, private registerService: RegisterService) {}

  UserForm!: FormGroup  
  msg = msg;
  paginaLink = "/inicial"

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])
    })
    
  }

  get name() {
    return this.UserForm.get('name')!;
  }
  get email() {
    return this.UserForm.get('email')!;
  }

  get password() {
    return this.UserForm.get('password')!;
  }

  get confirmPassword() {
    return this.UserForm.get('confirmPassword')!;
    
  }

  

  submit() {
    if(this.UserForm.invalid){
      return
    }
    if(this.UserForm.value.confirmPassword === this.UserForm.value.password){
      
      const email = this.email.value
      const name = this.name.value
      const password = String(this.password.value)
      const confirmPassword = String(this.confirmPassword.value)

      this.registerService.register(email,name,password, confirmPassword).subscribe(
        (data) => {
          this.router.navigate(['/initialpage']);
          console.log(data)
        },

        (error) => {
          Swal.fire('Email existente')
        }

      )

    }else{
      return
    }
    
  }

 
    
  

}
