import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit110Page } from './suit110.page';

const routes: Routes = [
  {
    path: '',
    component: Suit110Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit110PageRoutingModule {}
