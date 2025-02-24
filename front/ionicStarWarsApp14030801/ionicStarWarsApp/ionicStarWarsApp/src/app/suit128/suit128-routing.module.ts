import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit128Page } from './suit128.page';

const routes: Routes = [
  {
    path: '',
    component: Suit128Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit128PageRoutingModule {}
