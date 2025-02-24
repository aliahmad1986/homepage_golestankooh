import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit134PageRoutingModule } from './suit134-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit134Page } from './suit134.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit134PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit134Page]
})
export class Suit134PageModule {}
