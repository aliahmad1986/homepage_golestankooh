import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit104Page } from './suit104.page';

const routes: Routes = [
  {
    path: '',
    component: Suit104Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit104PageRoutingModule {}
