import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit118Page } from './suit118.page';

const routes: Routes = [
  {
    path: '',
    component: Suit118Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit118PageRoutingModule {}
