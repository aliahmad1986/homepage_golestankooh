import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara211Page } from './karvansara211.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara211PageRoutingModule } from './karvansara211-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara211PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara211Page]
})
export class karvansara211PageModule {}
