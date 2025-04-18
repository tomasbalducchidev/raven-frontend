import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logout } from 'src/app/helpers/localStorage';

@Component({
  selector: 'rv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goTo(path: string): void {
    this._router.navigate([path]);
  }

  logout() {
    logout();
    this._router.navigate(['']);
  }

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
}
