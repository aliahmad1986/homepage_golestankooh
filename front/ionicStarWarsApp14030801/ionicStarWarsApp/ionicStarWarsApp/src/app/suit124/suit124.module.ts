import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit124PageRoutingModule } from './suit124-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit124Page } from './suit124.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit124PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit124Page]
})
export class Suit124PageModule {}
