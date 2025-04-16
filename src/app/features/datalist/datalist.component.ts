import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
})
export class DatalistComponent implements OnInit {
  columns = [
    { key: 'flightNumber', label: 'Número de vuelo' },
    { key: 'airline', label: 'Aerolínea' },
    { key: 'departure', label: 'Partida' },
    { key: 'destination', label: 'Destino' },
    { key: 'status', label: 'Estado' },
  ];

  rows = [
    {
      flightNumber: 'IB2042',
      airline: 'Iberia',
      departure: '08:30',
      destination: 'Santorini',
      status: 'A tiempo',
    },
    {
      flightNumber: 'AA0824',
      airline: 'Aerolíneas Argentinas',
      departure: '09:30',
      destination: 'Buenos Aires',
      status: 'A tiempo',
    },
    {
      flightNumber: 'LT3105',
      airline: 'Lufthansa',
      departure: '10:30',
      destination: 'Múnich',
      status: 'Demorado',
    },
    {
      flightNumber: 'RY1962',
      airline: 'Ryanair',
      departure: '11:30',
      destination: 'Dublin',
      status: 'Demorado',
    },
    {
      flightNumber: 'BA1957',
      airline: 'British Airways',
      departure: '12:30',
      destination: 'Londres',
      status: 'A tiempo',
    },
    {
      flightNumber: 'TK8973',
      airline: 'Turkish Airlines',
      departure: '13:30',
      destination: 'Estambul',
      status: 'Demorado',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
