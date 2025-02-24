import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit110PageRoutingModule } from './suit110-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit110Page } from './suit110.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit110PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit110Page]
})
export class Suit110PageModule {}
