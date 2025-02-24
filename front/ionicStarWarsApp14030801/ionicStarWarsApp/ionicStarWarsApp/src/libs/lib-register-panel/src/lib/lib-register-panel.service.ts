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
  SaveNameFamilService(name: string, famil: string, mobile: string):
    Observable<{ result: string, success: boolean, personId: number }> {
    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('famil', famil);
    params = params.append('mobile', mobile);
    params = params.append('func', 'SaveNameFamil');
    let httpOptions = {
      headers: new HttpHeaders(),
      params: params
    };
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<{ result: string, success: boolean, personId: number }>
    (environment.host.apiurl, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }

  checkCodeWithBackend(code: string, hashdata: string, mobile: string): Observable<{
    result: string, success: boolean, personId: number,
    name: string, famil: string
  }> {
    let params = new HttpParams();
    params = params.append('code', code);
    params = params.append('hashdata', hashdata);
    params = params.append('registeredMobile', mobile);
    params = params.append('func', 'checkcode');
    let httpOptions = {
      headers: new HttpHeaders(),
      params: params
    };
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<{ result: string, success: boolean, registeredMobile: boolean }>
    ( environment.host.apiurl, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }
  sendSmsWithbackend(mobile: string): Observable<{ result: string, success: boolean }> {
    let params = new HttpParams();

    params = params.append('mobile', mobile);
    params = params.append('func', 'sendSms');
    let httpOptions = {
      headers: new HttpHeaders(),
      params: params
    };
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<{ result: string, success: boolean }>(environment.host.apiurl, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }
}
