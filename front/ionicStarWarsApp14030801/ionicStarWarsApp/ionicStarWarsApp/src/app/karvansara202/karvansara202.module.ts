import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara202Page } from './karvansara202.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara202PageRoutingModule } from './karvansara202-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara202PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara202Page]
})
export class karvansara201PageModule {}
