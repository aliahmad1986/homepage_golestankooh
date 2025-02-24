import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit130PageRoutingModule } from './suit130-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit130Page } from './suit130.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit130PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit130Page]
})
export class Suit130PageModule {}
