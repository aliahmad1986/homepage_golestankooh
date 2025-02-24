import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarvansaratowinPageRoutingModule } from './karvansaratowin-routing.module';

import { KarvansaratowinPage } from './karvansaratowin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarvansaratowinPageRoutingModule
  ],
  declarations: [KarvansaratowinPage]
})
export class KarvansaratowinPageModule {}
