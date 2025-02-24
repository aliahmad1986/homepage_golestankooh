import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit118PageRoutingModule } from './suit118-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit118Page } from './suit118.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit118PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit118Page]
})
export class Suit118PageModule {}
