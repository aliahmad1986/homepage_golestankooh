import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit126Page } from './suit126.page';

const routes: Routes = [
  {
    path: '',
    component: Suit126Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit126PageRoutingModule {}
