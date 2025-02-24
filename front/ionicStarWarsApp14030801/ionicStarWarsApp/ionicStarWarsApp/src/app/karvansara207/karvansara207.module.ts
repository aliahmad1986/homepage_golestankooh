import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara207Page } from './karvansara207.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara207PageRoutingModule } from './karvansara207-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara207PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara207Page]
})
export class karvansara207PageModule {}
