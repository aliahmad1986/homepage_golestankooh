import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara210Page } from './karvansara210.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara210PageRoutingModule } from './karvansara210-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara210PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara210Page]
})
export class karvansara210PageModule {}
