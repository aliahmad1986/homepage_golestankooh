import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit119Page } from './suit119.page';

const routes: Routes = [
  {
    path: '',
    component: Suit119Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit119PageRoutingModule {}
