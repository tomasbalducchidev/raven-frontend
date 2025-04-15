import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/login.model';

@Component({
  selector: 'rv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private _router: Router) {}

  login(formValue: UserLogin): void {
    if (formValue) {
      const { email, password } = formValue;
      if (email === 'raven@raven.com' && password === 'Raven123') {
        // TODO: refact
        localStorage.setItem('user', JSON.stringify(formValue)); // TODO: helper
        this._router.navigate(['dashboard']);
      }
    }
  }
}
