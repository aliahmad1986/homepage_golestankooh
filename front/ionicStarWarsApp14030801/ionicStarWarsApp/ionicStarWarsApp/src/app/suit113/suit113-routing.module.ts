import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit113Page } from './suit113.page';

const routes: Routes = [
  {
    path: '',
    component: Suit113Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit113PageRoutingModule {}
