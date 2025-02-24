import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Suit122Page } from './suit122.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { IonicModule } from '@ionic/angular';
import { Suit122PageRoutingModule } from './suit122-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suit122PageRoutingModule,
    LibWizardPanelModule
  ],
  declarations: [Suit122Page]
})
export class Suit122PageModule {}
