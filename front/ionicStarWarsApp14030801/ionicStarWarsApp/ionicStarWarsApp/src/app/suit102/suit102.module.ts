import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';

import { Suit102PageRoutingModule } from './suit102-routing.module';

import { Suit102Page } from './suit102.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit102PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit102Page]
})
export class Suit102PageModule {}
