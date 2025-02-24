import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VrfyreservationPageRoutingModule } from './vrfyreservation-routing.module';

import { VrfyreservationPage } from './vrfyreservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VrfyreservationPageRoutingModule
  ],
  declarations: [VrfyreservationPage]
})
export class VrfyreservationPageModule {}
