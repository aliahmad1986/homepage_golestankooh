import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Karvansara212Page } from './karvansara212.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Karvansara212PageRoutingModule } from './karvansara212-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Karvansara212PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Karvansara212Page]
})
export class karvansara212PageModule {}
