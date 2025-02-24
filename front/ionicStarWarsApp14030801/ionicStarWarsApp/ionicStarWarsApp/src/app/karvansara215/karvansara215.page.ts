import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Karvansara215',
  templateUrl: './Karvansara215.page.html',
  styleUrls: ['./Karvansara215.page.scss'],
})

export class Karvansara215Page implements OnDestroy {

  personId: number = 0;
  RentItemID: number=1;
  Capacity: number=5;
  typeReserve2 :number=0;
  incomeReasonID :number=12;
  ReserveID:number=0;
  DocNo:number=0;
  ToalPrice:number=0;
  private baseUrl: string;
  private http: HttpClient;
  private route: ActivatedRoute;

  model: PaymentVerifyResultViewModel;
  constructor(private menu: MenuController, private router: Router,
    public navCtrl: NavController, private activatedRoute: ActivatedRoute, private title: Title,
    http: HttpClient, route: ActivatedRoute) {
      this.http=http;
      this.route=route;
      title.setTitle("رزرو")
    }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.model = {} as PaymentVerifyResultViewModel;
 
    const MID = this.route.snapshot.paramMap.get('MID');
    if(MID!=""){
      const orderId = this.route.snapshot.paramMap.get('id');
      this.http.get<PaymentVerifyResultViewModel>(this.baseUrl + `order/${orderId}`).subscribe(result => {
        this.model = result;
      }, error => console.error(error));

    }

  }



openFirst(): void {
  this.menu.enable(true, 'first');
  this.menu.open('first');
}

openEnd() {
  this.menu.open('end');
}

openCustom() {
  this.menu.enable(true, 'custom');
  this.menu.open('custom');
}
facilitiesCollection():void{
// this.router.navigate(['/facilities']);
this.navCtrl.navigateForward('/facilities');
// this.router.navigateByUrl('/facilities');
// alert('2222222222222')
  
}

customerClub():void{
  this.navCtrl.navigateForward('/customer-club');

}
attractions(){
  this.navCtrl.navigateForward('/attractions');
 
}
introdution(){
  this.navCtrl.navigateForward('/introduction');

}
projectsfuture(): void{
  this.navCtrl.navigateForward('/projectsfuture')

}
contact(){
  this.navCtrl.navigateForward('/contact-us')

}
login(){
alert('login')
}

  GetOutputValDate(item:{pid:number,resId:number,docNo:number,totalPrice:number}) {
    this.personId = item.pid;
    this.ReserveID=item.resId;
    this.DocNo=item.docNo;
    this.ToalPrice=item.totalPrice;
  } 

}
interface PaymentVerifyResultViewModel {
  isPaid: boolean;
  trackingNumber: number;
  amount: number;
  gatewayName: string;
  gatewayAccountName: string;
  transactionCode: string;
  message: string;
}
