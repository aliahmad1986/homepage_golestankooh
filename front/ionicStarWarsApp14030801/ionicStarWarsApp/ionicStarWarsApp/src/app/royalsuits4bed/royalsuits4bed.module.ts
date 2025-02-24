import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Royalsuits4bedPageRoutingModule } from './royalsuits4bed-routing.module';

import { Royalsuits4bedPage } from './royalsuits4bed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Royalsuits4bedPageRoutingModule
  ],
  declarations: [Royalsuits4bedPage]
})
export class Royalsuits4bedPageModule {}
