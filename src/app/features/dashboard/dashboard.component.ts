import { Component, OnInit } from '@angular/core';
import { WidgetData } from 'src/app/models/dashboard.model';

@Component({
  selector: 'rv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  widgetData: WidgetData[] = [
    {
      quantity: 1773,
      description: 'Usuarios activos',
      icon: 'fa-solid fa-user-check',
      color: 'red',
    },
    {
      quantity: 2908,
      description: 'Usuarios bloqueados',
      icon: 'fa-solid fa-user-xmark',
      color: 'green',
    },
    {
      quantity: 567,
      description: 'Usuarios eliminados',
      icon: 'fa-solid fa-user-slash',
      color: 'yellow',
    },
    {
      quantity: 10400,
      description: 'Usuarios enfermos',
      icon: 'fa-solid fa-user-injured',
      color: 'blue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
