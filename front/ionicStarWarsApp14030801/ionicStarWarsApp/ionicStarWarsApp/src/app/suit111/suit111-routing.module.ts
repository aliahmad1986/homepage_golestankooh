import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit111Page } from './suit111.page';

const routes: Routes = [
  {
    path: '',
    component: Suit111Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit111PageRoutingModule {}
