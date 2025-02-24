import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara3bedPage } from './karvansara3bed.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara3bedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara3bedPageRoutingModule {}
