import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit114Page } from './suit114.page';

const routes: Routes = [
  {
    path: '',
    component: Suit114Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit114PageRoutingModule {}
