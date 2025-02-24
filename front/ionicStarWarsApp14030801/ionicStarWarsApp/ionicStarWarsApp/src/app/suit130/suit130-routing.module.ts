import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit130Page } from './suit130.page';

const routes: Routes = [
  {
    path: '',
    component: Suit130Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit130PageRoutingModule {}
