import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit123Page } from './suit123.page';

const routes: Routes = [
  {
    path: '',
    component: Suit123Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit123PageRoutingModule {}
