import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { setToken } from 'src/app/helpers/localStorage';
import { UserLogin } from 'src/app/models/auth.model';

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
        setToken('token');
        this._router.navigate(['dashboard']);
      }
    }
  }
}
