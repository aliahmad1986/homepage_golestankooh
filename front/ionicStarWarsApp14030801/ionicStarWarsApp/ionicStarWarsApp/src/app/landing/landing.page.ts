import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { ViewChild, ElementRef, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {



  constructor(private title: Title, private navCtrl: NavController,) {
    title.setTitle(" صفحه رزرواسیون")
   }

  ngOnInit() {
  }

  suit122(){
        this.navCtrl.navigateForward('/suit122')
  }
  


}
