import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit104PageRoutingModule } from './suit104-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit104Page } from './suit104.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit104PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit104Page]
})
export class Suit104PageModule {}
