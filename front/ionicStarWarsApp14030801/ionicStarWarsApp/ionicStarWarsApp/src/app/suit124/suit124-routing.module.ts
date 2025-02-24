import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit124Page } from './suit124.page';

const routes: Routes = [
  {
    path: '',
    component: Suit124Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit124PageRoutingModule {}
