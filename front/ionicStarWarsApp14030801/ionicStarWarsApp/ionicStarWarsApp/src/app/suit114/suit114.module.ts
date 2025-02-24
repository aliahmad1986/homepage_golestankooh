import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit114PageRoutingModule } from './suit114-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit114Page } from './suit114.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit114PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit114Page]
})
export class Suit114PageModule {}
