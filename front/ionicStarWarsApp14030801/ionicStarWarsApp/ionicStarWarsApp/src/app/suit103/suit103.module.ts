import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit103PageRoutingModule } from './suit103-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit103Page } from './suit103.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit103PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit103Page]
})
export class Suit103PageModule {}
