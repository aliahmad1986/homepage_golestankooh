import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit106PageRoutingModule } from './suit106-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit106Page } from './suit106.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit106PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit106Page]
})
export class Suit106PageModule {}
