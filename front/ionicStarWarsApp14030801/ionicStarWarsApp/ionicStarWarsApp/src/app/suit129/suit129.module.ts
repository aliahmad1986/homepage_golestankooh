import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit129PageRoutingModule } from './suit129-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit129Page } from './suit129.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit129PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit129Page]
})
export class Suit129PageModule {}
