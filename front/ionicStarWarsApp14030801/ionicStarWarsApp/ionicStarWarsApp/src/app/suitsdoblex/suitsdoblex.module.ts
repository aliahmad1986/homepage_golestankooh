import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitsdoblexPageRoutingModule } from './suitsdoblex-routing.module';

import { SuitsdoblexPage } from './suitsdoblex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitsdoblexPageRoutingModule
  ],
  declarations: [SuitsdoblexPage]
})
export class SuitsdoblexPageModule {}
