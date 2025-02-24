import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit132PageRoutingModule } from './suit132-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit132Page } from './suit132.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit132PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit132Page]
})
export class Suit132PageModule {}
