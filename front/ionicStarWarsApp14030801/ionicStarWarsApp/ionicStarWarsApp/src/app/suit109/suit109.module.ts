import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit109PageRoutingModule } from './suit109-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit109Page } from './suit109.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit109PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit109Page]
})
export class Suit109PageModule {}
