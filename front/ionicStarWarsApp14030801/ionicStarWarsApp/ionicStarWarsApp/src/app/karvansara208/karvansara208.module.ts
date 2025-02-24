import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara208Page } from './karvansara208.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara208PageRoutingModule } from './karvansara208-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara208PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara208Page]
})
export class karvansara208PageModule {}
