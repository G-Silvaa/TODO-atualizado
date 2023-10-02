import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

    constructor() {}

    UserForm!: FormGroup 
    msg = msg;

    ngOnInit(): void {
      this.UserForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
      })
    }

    get email() {
      return this.UserForm.get('email')!;
    }

    get password() {
      return this.UserForm.get('password')!;
    }

    submit() {
      if(this.UserForm.invalid){
        return
      }
      console.log('enviou')
    }

}
