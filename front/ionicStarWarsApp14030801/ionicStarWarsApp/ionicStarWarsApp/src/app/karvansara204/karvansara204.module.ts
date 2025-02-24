import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara204Page } from './karvansara204.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara204PageRoutingModule } from './karvansara204-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    karvansara204Module,
    LibWizardPanelModule
  ],
  declarations: [Karvansara204Page]
})
export class karvansara204Module {}
