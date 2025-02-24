import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit116PageRoutingModule } from './suit116-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit116Page } from './suit116.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit116PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit116Page]
})
export class Suit116PageModule {}
