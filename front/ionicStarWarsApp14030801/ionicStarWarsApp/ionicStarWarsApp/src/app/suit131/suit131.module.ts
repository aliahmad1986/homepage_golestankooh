import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit131PageRoutingModule } from './suit131-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit131Page } from './suit131.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit131PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit131Page]
})
export class Suit131PageModule {}
