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
      quantity: 81,
      description: 'Vuelos en curso',
      icon: 'fa-solid fa-plane',
      color: 'green',
    },
    {
      quantity: 31,
      description: 'Vuelos iniciando',
      icon: 'fa-solid fa-plane-departure',
      color: 'yellow',
    },
    {
      quantity: 42,
      description: 'Vuelos arribando',
      icon: 'fa-solid fa-plane-arrival',
      color: 'blue',
    },
    {
      quantity: 24,
      description: 'Vuelos demorados',
      icon: 'fa-solid fa-plane-circle-exclamation',
      color: 'red',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
