
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CellCalenderReservation, Month, Calender } from './component-range-date-picker/cell-calender-reservation.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibReservPanelService {
  constructor(
    private handler: HttpBackend,
    private http: HttpClient,
  ) {

   }
  SubmitPost(data: Map<string, string>, url: string): Observable<any> {
    let params = new HttpParams();
    for (let [key, value] of data) {
      params = params.set(key, value);
    }
    params = params.set('api_key', `${environment.host.api_key}`);
    let httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<{ result: string, success: boolean }>(`${environment.host.apiurl}/` + url,params,httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }
  get(RentItemID: number, StartDate: string, Act: string): Observable<Calender> {
    let params = new HttpParams();
    params = params.append('StartDate', StartDate);
    params = params.append('RentItemID', RentItemID);
    params = params.append('Act', Act);
    params = params.append('func', 'selectCalender');
    let httpOptions = {
      headers: new HttpHeaders(),
      params: params
    };
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<Month[]>(environment.host.apiurl, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }

}

