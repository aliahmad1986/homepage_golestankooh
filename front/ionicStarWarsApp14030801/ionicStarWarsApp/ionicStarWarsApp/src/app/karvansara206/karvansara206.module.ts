import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { karvansara206Page } from './karvansara206.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara206PageRoutingModule } from './karvansara206-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara206PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [karvansara206Page]
})
export class karvansara206PageModule {}
