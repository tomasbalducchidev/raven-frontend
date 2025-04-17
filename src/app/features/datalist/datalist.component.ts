import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnData, RowData } from 'src/app/models/datalist.model';

@Component({
  selector: 'rv-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
})
export class DatalistComponent implements OnInit {
  columns: ColumnData[] = [];
  rows: RowData[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDatalistData();
  }

  getDatalistData(): void {
    this._route.data.subscribe((data) => {
      const resolvedDatalist = data['resolvedDatalist'];
      this.columns = resolvedDatalist.columnData;
      this.rows = resolvedDatalist.rowData;
    });
  }
}
