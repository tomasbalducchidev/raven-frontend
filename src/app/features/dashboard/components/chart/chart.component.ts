import { Component, Input } from '@angular/core';

@Component({
  selector: 'rv-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() chartData: { label: string; value: number; color: string }[] = [];
}
