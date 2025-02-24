import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LibRegisterPanelService {

  constructor(
    private handler: HttpBackend,
    private http: HttpClient
  ) {
  }
  postSubmit(data: Map<string, string>, url: string): Observable<any> {
    let params = new HttpParams();
    for (let [key, value] of data) {
      params = params.set(key, value);
    }
    params = params.set('api_key', `${environment.host.api_key}`);
    let httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<any>(`${environment.host.apiurl}/` + url, params, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }
}
