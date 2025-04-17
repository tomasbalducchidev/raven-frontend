import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartData, WidgetData } from 'src/app/models/dashboard.model';

@Component({
  selector: 'rv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  widgetData: WidgetData[] = [];
  chartData: ChartData[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(): void {
    this._route.data.subscribe((data) => {
      const resolvedData = data['resolvedData'];
      console.log('resolvedData', resolvedData);
      this.widgetData = resolvedData.widgetData;
      this.chartData = resolvedData.chartData;
    });
  }
}
