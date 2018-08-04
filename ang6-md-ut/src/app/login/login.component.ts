import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LoginErrorStateMatcher } from './login-error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new LoginErrorStateMatcher();

  ngOnInit() {
  }

}
