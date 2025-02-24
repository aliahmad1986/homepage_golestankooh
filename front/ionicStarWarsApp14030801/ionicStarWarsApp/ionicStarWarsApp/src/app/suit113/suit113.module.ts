import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit113PageRoutingModule } from './suit113-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit113Page } from './suit113.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit113PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit113Page]
})
export class Suit113PageModule {}
