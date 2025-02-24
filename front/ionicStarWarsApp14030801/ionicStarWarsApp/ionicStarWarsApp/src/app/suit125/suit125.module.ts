import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit125PageRoutingModule } from './suit125-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit125Page } from './suit125.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit125PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit125Page]
})
export class Suit125PageModule {}
