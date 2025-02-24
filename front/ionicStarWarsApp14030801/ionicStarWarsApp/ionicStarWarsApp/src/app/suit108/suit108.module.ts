import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit108PageRoutingModule } from './suit108-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit108Page } from './suit108.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit108PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit108Page]
})
export class Suit108PageModule {}
