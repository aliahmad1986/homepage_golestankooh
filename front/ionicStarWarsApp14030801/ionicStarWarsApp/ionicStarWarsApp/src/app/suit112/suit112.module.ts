import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suit112PageRoutingModule } from './suit112-routing.module';
import { LibWizardPanelModule } from 'lib-wizard-panel';

import { Suit112Page } from './suit112.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit112PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit112Page]
})
export class Suit112PageModule {}
