import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara211Page } from './karvansara211.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara211Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara211PageRoutingModule {}
