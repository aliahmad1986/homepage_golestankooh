import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReservePage } from './reserve.page';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { ReservePageRoutingModule } from './reserve-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservePageRoutingModule,
    ToolbarModule,
    MainfooterCModule,
	LibWizardPanelModule
  ],
  declarations: [ReservePage]
})
export class ReservePageModule {}
