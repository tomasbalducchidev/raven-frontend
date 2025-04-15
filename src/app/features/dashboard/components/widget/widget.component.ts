import { Component, Input, OnInit } from '@angular/core';
import { WidgetData } from 'src/app/models/dashboard.model';

@Component({
  selector: 'rv-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() widgetData!: WidgetData;

  constructor() {}

  ngOnInit(): void {}
}
