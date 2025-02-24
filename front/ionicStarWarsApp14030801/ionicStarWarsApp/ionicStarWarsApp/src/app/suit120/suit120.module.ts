import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit120PageRoutingModule } from './suit120-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit120Page } from './suit120.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit120PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit120Page]
})
export class Suit120PageModule {}
