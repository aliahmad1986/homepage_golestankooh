import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara220Page } from './karvansara220.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara220PageRoutingModule } from './karvansara220-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara220PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara220Page]
})
export class karvansara220PageModule {}
