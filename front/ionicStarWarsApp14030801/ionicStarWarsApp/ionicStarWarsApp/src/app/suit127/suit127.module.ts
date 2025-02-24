import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit127PageRoutingModule } from './suit127-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit127Page } from './suit127.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit127PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit127Page]
})
export class Suit127PageModule {}
