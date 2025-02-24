import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit101Page } from './suit101.page';

const routes: Routes = [
  {
    path: '',
    component: Suit101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit101PageRoutingModule {}
