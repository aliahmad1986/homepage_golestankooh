import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit109Page } from './suit109.page';

const routes: Routes = [
  {
    path: '',
    component: Suit109Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit109PageRoutingModule {}
