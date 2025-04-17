import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { DatalistData } from '../models/datalist.model';

@Injectable({
  providedIn: 'root',
})
export class DatalistResolver implements Resolve<DatalistData> {
  constructor(private _dataservice: DataService, private _router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<DatalistData> {
    return this._dataservice.getDatalistData();
  }
}
