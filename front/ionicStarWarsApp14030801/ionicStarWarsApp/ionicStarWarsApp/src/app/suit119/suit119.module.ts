import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit119PageRoutingModule } from './suit119-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit119Page } from './suit119.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit119PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit119Page]
})
export class Suit119PageModule {}
