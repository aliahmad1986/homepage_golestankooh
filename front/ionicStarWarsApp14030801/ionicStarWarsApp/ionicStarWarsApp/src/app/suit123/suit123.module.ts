import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit123PageRoutingModule } from './suit123-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit123Page } from './suit123.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit123PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit123Page]
})
export class Suit123PageModule {}
