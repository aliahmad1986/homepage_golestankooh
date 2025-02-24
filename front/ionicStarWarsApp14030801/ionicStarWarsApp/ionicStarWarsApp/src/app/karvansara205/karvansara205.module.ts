import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara205Page } from './karvansara205.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara205PageRoutingModule } from './karvansara205-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara205PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara205Page]
})
export class karvansara205PageModule {}
