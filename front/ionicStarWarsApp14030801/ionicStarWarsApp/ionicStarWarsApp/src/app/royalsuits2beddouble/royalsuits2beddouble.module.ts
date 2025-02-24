import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Royalsuits2beddoublePageRoutingModule } from './royalsuits2beddouble-routing.module';

import { Royalsuits2beddoublePage } from './royalsuits2beddouble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Royalsuits2beddoublePageRoutingModule
  ],
  declarations: [Royalsuits2beddoublePage]
})
export class Royalsuits2beddoublePageModule {}
