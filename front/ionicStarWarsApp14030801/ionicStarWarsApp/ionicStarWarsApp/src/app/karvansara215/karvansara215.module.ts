import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara215Page } from './karvansara215.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara215PageRoutingModule } from './karvansara215-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara215PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara215Page]
})
export class karvansara215PageModule {}
