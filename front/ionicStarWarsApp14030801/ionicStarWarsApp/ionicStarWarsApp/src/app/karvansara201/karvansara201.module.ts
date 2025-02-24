import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara201Page } from './karvansara201.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara201PageRoutingModule } from './karvansara201-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara201PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara201Page]
})
export class karvansara201Module {}
