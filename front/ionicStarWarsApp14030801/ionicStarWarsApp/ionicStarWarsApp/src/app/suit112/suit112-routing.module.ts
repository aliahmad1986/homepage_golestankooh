import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit112Page } from './suit112.page';

const routes: Routes = [
  {
    path: '',
    component: Suit112Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit112PageRoutingModule {}
