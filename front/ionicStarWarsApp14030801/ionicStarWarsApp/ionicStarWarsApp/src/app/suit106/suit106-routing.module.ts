import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit106Page } from './suit106.page';

const routes: Routes = [
  {
    path: '',
    component: Suit106Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit106PageRoutingModule {}
