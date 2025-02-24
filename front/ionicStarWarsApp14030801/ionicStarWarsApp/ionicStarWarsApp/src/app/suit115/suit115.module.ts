import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit115PageRoutingModule } from './suit115-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit115Page } from './suit115.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit115PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit115Page]
})
export class Suit115PageModule {}
