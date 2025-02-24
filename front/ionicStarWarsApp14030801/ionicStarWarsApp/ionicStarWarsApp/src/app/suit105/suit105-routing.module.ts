import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit105Page } from './suit105.page';

const routes: Routes = [
  {
    path: '',
    component: Suit105Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit105PageRoutingModule {}
