import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit117PageRoutingModule } from './suit117-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit117Page } from './suit117.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit117PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit117Page]
})
export class Suit117PageModule {}
