import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara216Page } from './karvansara216.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara216PageRoutingModule } from './karvansara216-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara216PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara216Page]
})
export class karvansara216PageModule {}
