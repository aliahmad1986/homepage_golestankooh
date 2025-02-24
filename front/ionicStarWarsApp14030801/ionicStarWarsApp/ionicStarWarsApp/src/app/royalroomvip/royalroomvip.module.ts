import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyalroomvipPageRoutingModule } from './royalroomvip-routing.module';

import { RoyalroomvipPage } from './royalroomvip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyalroomvipPageRoutingModule
  ],
  declarations: [RoyalroomvipPage]
})
export class RoyalroomvipPageModule {}
