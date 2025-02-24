import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarvansaravipPageRoutingModule } from './karvansaravip-routing.module';

import { KarvansaravipPage } from './karvansaravip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarvansaravipPageRoutingModule
  ],
  declarations: [KarvansaravipPage]
})
export class KarvansaravipPageModule {}
