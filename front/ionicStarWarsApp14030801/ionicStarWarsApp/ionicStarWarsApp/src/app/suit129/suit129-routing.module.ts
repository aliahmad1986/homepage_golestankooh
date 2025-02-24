import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit129Page } from './suit129.page';

const routes: Routes = [
  {
    path: '',
    component: Suit129Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit129PageRoutingModule {}
