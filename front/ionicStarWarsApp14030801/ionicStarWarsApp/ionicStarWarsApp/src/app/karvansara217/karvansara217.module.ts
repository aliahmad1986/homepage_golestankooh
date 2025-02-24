import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara217Page } from './karvansara217.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara217PageRoutingModule } from './karvansara217-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara217PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara217Page]
})
export class karvansara217PageModule {}
