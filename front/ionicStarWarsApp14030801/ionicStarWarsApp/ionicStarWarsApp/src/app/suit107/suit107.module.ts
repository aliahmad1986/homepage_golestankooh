import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit107PageRoutingModule } from './suit107-routing.module';

import { Suit107Page } from './suit107.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit107PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit107Page]
})
export class Suit107PageModule {}
