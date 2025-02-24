import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit125Page } from './suit125.page';

const routes: Routes = [
  {
    path: '',
    component: Suit125Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit125PageRoutingModule {}
