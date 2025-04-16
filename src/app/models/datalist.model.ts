export interface ColumnData {
  key: string;
  label: string;
}

export interface RowData {
  flightNumber: string;
  airline: string;
  departure: string;
  destination: string;
  status: string;
}

export interface DatalistData {
  columnData: ColumnData[];
  rowData: RowData[];
}