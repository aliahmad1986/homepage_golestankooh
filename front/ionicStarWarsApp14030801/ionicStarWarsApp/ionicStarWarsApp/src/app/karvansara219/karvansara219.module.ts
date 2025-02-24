import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara219Page } from './karvansara219.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara219PageRoutingModule } from './karvansara219-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara219PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara219Page]
})
export class karvansara219PageModule {}
