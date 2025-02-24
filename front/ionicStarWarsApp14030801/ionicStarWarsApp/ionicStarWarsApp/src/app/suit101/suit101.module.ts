import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { IonicModule } from '@ionic/angular';

import { Suit101PageRoutingModule } from './suit101-routing.module';

import { Suit101Page } from './suit101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit101PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit101Page]
})
export class Suit101PageModule {}
