import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit116Page } from './suit116.page';

const routes: Routes = [
  {
    path: '',
    component: Suit116Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit116PageRoutingModule {}
