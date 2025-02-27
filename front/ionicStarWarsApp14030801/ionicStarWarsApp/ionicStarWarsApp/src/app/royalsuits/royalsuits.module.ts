import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyalsuitsPageRoutingModule } from './royalsuits-routing.module';

import { RoyalsuitsPage } from './royalsuits.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyalsuitsPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [RoyalsuitsPage]
})
export class RoyalsuitsPageModule {}
