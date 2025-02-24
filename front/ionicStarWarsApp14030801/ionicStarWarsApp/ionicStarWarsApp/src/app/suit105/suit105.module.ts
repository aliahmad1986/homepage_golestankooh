import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit105PageRoutingModule } from './suit105-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit105Page } from './suit105.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit105PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit105Page]
})
export class Suit105PageModule {}
