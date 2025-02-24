import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarvansaradoublePageRoutingModule } from './karvansaradouble-routing.module';

import { KarvansaradoublePage } from './karvansaradouble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarvansaradoublePageRoutingModule
  ],
  declarations: [KarvansaradoublePage]
})
export class KarvansaradoublePageModule {}
