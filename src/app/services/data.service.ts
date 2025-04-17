import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from '../models/dashboard.model';
import { DatalistData } from '../models/datalist.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl: string;
  httpOptions: {};

  constructor(private _http: HttpClient) {
    this.apiUrl = `../assets/mocks`;
    this.httpOptions = {
      headers: new HttpHeaders({
        Accept: '*/*',
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
  }

  getDashboardData(): Observable<DashboardData> {
    const apiUrl = `${this.apiUrl}/dashboard.mock.json`;
    return this._http.get<DashboardData>(apiUrl, this.httpOptions);
  }

  getDatalistData(): Observable<DatalistData> {
    const apiUrl = `${this.apiUrl}/datalist.mock.json`;
    return this._http.get<DatalistData>(apiUrl, this.httpOptions);
  }
}
