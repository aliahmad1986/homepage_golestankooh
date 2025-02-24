import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara203Page } from './karvansara203.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara203PageRoutingModule } from './karvansara203-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara203PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara203Page]
})
export class karvansara203PageModule {}
