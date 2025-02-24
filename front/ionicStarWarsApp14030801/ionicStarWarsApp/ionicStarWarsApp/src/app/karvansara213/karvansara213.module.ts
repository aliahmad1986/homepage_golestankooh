import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara213Page } from './karvansara213.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara213PageRoutingModule } from './karvansara213-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara213PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara213Page]
})
export class karvansara213PageModule {}
