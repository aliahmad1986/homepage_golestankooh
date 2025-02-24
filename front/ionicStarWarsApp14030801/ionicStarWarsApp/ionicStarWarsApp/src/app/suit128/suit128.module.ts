import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit128PageRoutingModule } from './suit128-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit128Page } from './suit128.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit128PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit128Page]
})
export class Suit128PageModule {}
