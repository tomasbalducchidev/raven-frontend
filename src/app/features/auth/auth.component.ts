import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['raven@raven.com', [Validators.required, Validators.email]],
      password: ['Raven123', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // console.log(this.loginForm.value);
      if (email === 'raven@raven.com' && password === 'Raven123') {
        // TODO: refact
        localStorage.setItem('user', JSON.stringify(this.loginForm.value)); // TODO: helper
        this._router.navigate(['dashboard']);
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
