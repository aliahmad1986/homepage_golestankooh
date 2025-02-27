import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Bill,PaymentRequestResultViewModel } from './lib-wizard-panel-bill.model';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibWizardPanelService {

  constructor(
    private handler: HttpBackend,
    private http: HttpClient
  ) {
    // this.http = new HttpClient(handler); /// to skip interceptors, becouse this service hits third backend provider
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
  // get(item: { bill: Bill, mobile: string }): Observable<{ result: string, success: boolean }> {
  //   let params = new HttpParams();
  //   params = params.append('bill', JSON.stringify(item.bill));
  //   params = params.append('mobile', item.mobile);
  //   params = params.append('func', 'savereservation');
  //   let httpOptions = {
  //     headers: new HttpHeaders(),
  //     params: params
  //   };
  //   httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  //   httpOptions.headers.append('Content-Type', 'application/json');
  //   return this.http.get<{ result: string, success: boolean }>(environment.host.apiurl, httpOptions)
  //     .pipe(map((data: any) => {
  //       return data;
  //     })
  //     );
  // }
  // getNameFamil(item: { personId: number }): Observable<{
  //   result: string, success: boolean,
  //   data: { name: string, famil: string, mobile: string }
  // }> {
  //   let params = new HttpParams();
  //   params = params.append('personId', item.personId);
  //   params = params.append('func', 'getnamefamil');
  //   let httpOptions = {
  //     headers: new HttpHeaders(),
  //     params: params
  //   };
  //   httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  //   httpOptions.headers.append('Content-Type', 'application/json');
  //   return this.http.get<{ result: string, success: boolean, data:
  //      { name: string, famil: string, mobile: string } }>
  //      (environment.host.apiurl, httpOptions)
  //     .pipe(map((data: any) => {
  //       return data;
  //     })
  //     );
  // }
  // SubmitPost(item: {
  //   RentItemID: number,
  //   TypeReserve2: number,
  //   IncomeReasonID: number, personId: number, bill: Bill
  // }): Observable<
  //   { result: string, success: boolean, data: { DocNo: number, ReserveID: number, ToalPrice: number } }
  // > {
  //   item.bill.choicedCalender.days=[];
  //   let params = new HttpParams()
  //     .set('bill', JSON.stringify(item.bill))
  //     .set('personId', item.personId)
  //     .set('RentItemID', item.RentItemID)
  //     .set('TypeReserve2', item.TypeReserve2)
  //     .set('IncomeReasonID', item.IncomeReasonID)
  //     .set('func', 'savereservation');
  //   let httpOptions = {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/json')
  //       .set('Access-Control-Allow-Origin', '*')
  //   };
 
  //   return this.http.post<{ result: string, success: boolean }>
  //   (environment.host.apiurl, params.toString(), httpOptions)
  //     .pipe(map((data: any) => {
  //       return data;
  //     })
  //     );
  // }
  // submit(item: {
  //   RentItemID: number,
  //   TypeReserve2: number,
  //   IncomeReasonID: number, personId: number, bill: Bill
  // }): Observable<
  //   { result: string, success: boolean, data: { DocNo: number, ReserveID: number, ToalPrice: number } }
  // > {
  //   item.bill.choicedCalender.days=[];
  //   let params = new HttpParams();
  //   params = params.append('bill', JSON.stringify(item.bill));
  //   params = params.append('personId', item.personId);

  //   params = params.append('RentItemID', item.RentItemID);
  //   params = params.append('TypeReserve2', item.TypeReserve2);
  //   params = params.append('IncomeReasonID', item.IncomeReasonID);
  //   params = params.append('func', 'savereservation');
  //   let httpOptions = {
  //     headers: new HttpHeaders(),
  //     params: params
  //   };
  //   httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  //   httpOptions.headers.append('Content-Type', 'application/json');
  //   return this.http.get<{ result: string, success: boolean }>
  //   (environment.host.apiurl, httpOptions)
  //     .pipe(map((data: any) => {
  //       return data;
  //     })
  //     );
  // }
  // pay(item: {
  //   RentItemID: number,
  //   TypeReserve2: number,
  //   IncomeReasonID: number, personId: number, bill: Bill
  // }): Observable<
  //   { result: PaymentRequestResultViewModel }
  // > {
  //   item.bill.choicedCalender.days=[];
  //   let params = new HttpParams();
  //   params = params.append('bill', JSON.stringify(item.bill));
  //   params = params.append('personId', item.personId);

  //   params = params.append('RentItemID', item.RentItemID);
  //   params = params.append('TypeReserve2', item.TypeReserve2);
  //   params = params.append('IncomeReasonID', item.IncomeReasonID);
  //   params = params.append('func', 'payreservation');
  //   let httpOptions = {
  //     headers: new HttpHeaders(),
  //     params: params
  //   };
  //   httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  //   httpOptions.headers.append('Content-Type', 'application/json');
  //   return this.http.get<{ result: string, success: boolean }>
  //   (environment.host.apiurl, httpOptions)
  //     .pipe(map((data: any) => {
  //       return data;
  //     })
  //     );
  // }
}
