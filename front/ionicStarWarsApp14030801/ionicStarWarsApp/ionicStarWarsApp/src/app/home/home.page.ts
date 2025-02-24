import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnDestroy {
  @ViewChild('myVideo') myVideo: ElementRef;
  slideOpt = {
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true
  };
  newsList:any;
  SubmitPost(url:string): Observable<any> {
    let params = new HttpParams(); 
    params = params.set('api_key', `${environment.host.api_key}`);

    let httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<{ result: string, success: boolean }>(`${environment.host.apiurl}/`+url, params, httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }
  ngOnInit(): void {
  this.SubmitPost("Api/Selectnews").pipe()
  .subscribe(
    (data) => {
      //  console.log(data);
        this.newsList=data.result.result.data;
        console.log(this.newsList);
    },
    error => { },
  );;
  
  }
  ngOnDestroy() {
    this.myVideo.nativeElement.autoplay = false;
  }

  constructor(private menu: MenuController, private router: Router,
    public navCtrl: NavController, private activatedRoute: ActivatedRoute, private title: Title,private http:HttpClient,private handler:HttpBackend) {
      title.setTitle("خانه");
      this.http=new HttpClient(handler);
      
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


}
