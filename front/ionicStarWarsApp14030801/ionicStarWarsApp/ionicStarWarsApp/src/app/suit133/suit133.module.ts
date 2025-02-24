import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit133PageRoutingModule } from './suit133-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit133Page } from './suit133.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit133PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit133Page]
})
export class Suit133PageModule {}
