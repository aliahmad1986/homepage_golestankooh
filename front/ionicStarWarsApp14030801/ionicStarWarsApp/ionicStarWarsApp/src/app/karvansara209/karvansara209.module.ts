import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara209Page } from './karvansara209.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara209PageRoutingModule } from './karvansara209-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara209PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara209Page]
})
export class karvansara209PageModule {}
