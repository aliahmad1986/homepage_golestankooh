import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router,RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  imports:[RouterLink],
  selector: 'app-vrfyreservation',
  templateUrl: './vrfyreservation.page.html',
  styleUrls: ['./vrfyreservation.page.scss'],
})
export class VrfyreservationPage implements OnInit {

  private http: HttpClient;
  private route: ActivatedRoute;
  private res_num:string;
  private ref_num:string;
  private mid:string;
  private status?:number;
  msg:string;
  vocher_link:string;
  has_vocher:boolean=false;

  model: PaymentVerifyResultViewModel;

  constructor(http: HttpClient, route: ActivatedRoute,router:Router) {
    this.http = http;
    this.route = route;
    this.route.queryParams.subscribe(params=>{
      this.mid=params["MID"];
      this.ref_num=params["RefNum"];
      this.res_num=params["ResNum"];
      this.status=params["Status"];
    });
  }

  ngOnInit(): void {
    this.model = {} as PaymentVerifyResultViewModel;   

    if (this.status == 2) {
      let params = new HttpParams();
      params = params.set('ResNum',this.res_num);
      params=params.set('RefNum',this.ref_num);
      params=params.set('MID',this.mid);
     params = params.set('api_key', `${environment.host.api_key}`);
      let httpOptions = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.show();
      this.http.post<any>(environment.host.apiurl+"/Api/Verifyreservation",params,httpOptions)
      .pipe(finalize(()=>this.hide()))
      .subscribe(res => {
        this.model = res.result.result;
        if(this.model.isPaid==true && res.result.docno>0){
          this.has_vocher=true;
          this.vocher_link=res.result.vocher_link;
          this.msg="شماره پذیرش شما"+res.result.docno +" می باشد";

        }
      }, error => console.error(error));
    }
    else {
      this.model.isPaid = false;
      this.model.message = this.Get_Message(this.status);
   
    }
  }
  openwin(){
    
    window.open(this.vocher_link);
  }
  Get_Message(status) {
    let message = "";
    switch (status?.toString()) {
      case "1":
        message = "کاربر انصراف داده است";
        break;
      case "2":
        message = "پرداخت با موفقیت انجام شد.";
        break;
      case "3":
        message = "پرداخت انجام نشد";
        break;
      case "4":
        message = "کاربر در بازه زمانی تعیین شده پاسخی ارسال نکرده است.";
        break;
      case "5":
        message = "پارامترهای ارسالی نامعتبر است.";
        break;
      case "8":
        message = "آدرس سرور پذیرنده نامعتبر است ";
        break;
      case "10":
        message = "توکن ارسال شده یافت نشد.";
        break;
      case "11":
        message = " این شماره ترمینال فقط تراکنش های توکنی قابل پرداخت هستند.";
        break;
      case "12":
        message = "شماره ترمینال ارسال شده یافت نشد";
        break;
        default:
          message="خطایی نا مشخص";
          break;
   

    }
    return message;

  }

  show() {
    const backdropWrapperElement = this.createLoadingBackdropTemplate();
    const bodyElement = document.querySelector('body');
    bodyElement?.appendChild(backdropWrapperElement);
  }

  hide() {
    const backdropWrapperElement = document.querySelector('#loadingBackdrop');
    backdropWrapperElement?.remove();
  }
  private createLoadingBackdropTemplate(): HTMLDivElement {
    const element = document.createElement('div');
    element.setAttribute('id', 'loadingBackdrop');
    element.setAttribute('style', `
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 999;
      background:radial-gradient(rgb(126 128 136), transparent);
    `);
    element.innerHTML = `
      <div class="backdrop"></div>
      <div class="spinner"> در حال دریافت اطلاعات
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
    return element;
  }
}
interface PaymentVerifyResultViewModel {
  isPaid: boolean;
  amount: number;
  message: string;
}
