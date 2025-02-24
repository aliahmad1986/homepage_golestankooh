import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit126PageRoutingModule } from './suit126-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit126Page } from './suit126.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit126PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit126Page]
})
export class Suit126PageModule {}
