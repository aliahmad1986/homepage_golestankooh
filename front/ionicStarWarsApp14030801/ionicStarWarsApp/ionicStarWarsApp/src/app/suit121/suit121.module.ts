import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit121PageRoutingModule } from './suit121-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit121Page } from './suit121.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit121PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit121Page]
})
export class Suit121PageModule {}
