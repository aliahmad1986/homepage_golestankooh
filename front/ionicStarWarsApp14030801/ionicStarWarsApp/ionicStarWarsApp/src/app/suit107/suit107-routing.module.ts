import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit107Page } from './suit107.page';

const routes: Routes = [
  {
    path: '',
    component: Suit107Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit107PageRoutingModule {}
