import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit121Page } from './suit121.page';

const routes: Routes = [
  {
    path: '',
    component: Suit121Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit121PageRoutingModule {}
