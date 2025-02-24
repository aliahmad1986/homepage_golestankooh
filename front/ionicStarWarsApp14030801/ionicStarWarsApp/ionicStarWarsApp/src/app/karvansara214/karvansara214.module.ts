import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara214Page } from './karvansara214.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara214PageRoutingModule } from './karvansara214-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara214PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara214Page]
})
export class karvansara214PageModule {}
