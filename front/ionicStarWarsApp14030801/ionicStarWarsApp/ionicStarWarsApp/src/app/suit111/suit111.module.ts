import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit111PageRoutingModule } from './suit111-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit111Page } from './suit111.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit111PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit111Page]
})
export class Suit111PageModule {}
