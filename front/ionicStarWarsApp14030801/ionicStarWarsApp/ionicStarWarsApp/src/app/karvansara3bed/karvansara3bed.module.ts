import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Karvansara3bedPageRoutingModule } from './karvansara3bed-routing.module';

import { Karvansara3bedPage } from './karvansara3bed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara3bedPageRoutingModule
  ],
  declarations: [Karvansara3bedPage]
})
export class Karvansara3bedPageModule {}
