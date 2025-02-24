import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara218Page } from './karvansara218.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara218PageRoutingModule } from './karvansara218-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara218PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara218Page]
})
export class karvansara218PageModule {}
