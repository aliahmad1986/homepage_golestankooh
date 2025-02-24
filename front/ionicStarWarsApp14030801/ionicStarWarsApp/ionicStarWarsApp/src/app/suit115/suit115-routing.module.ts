import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit115Page } from './suit115.page';

const routes: Routes = [
  {
    path: '',
    component: Suit115Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit115PageRoutingModule {}
