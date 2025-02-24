import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit117Page } from './suit117.page';

const routes: Routes = [
  {
    path: '',
    component: Suit117Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit117PageRoutingModule {}
