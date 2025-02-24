import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit127Page } from './suit127.page';

const routes: Routes = [
  {
    path: '',
    component: Suit127Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit127PageRoutingModule {}
