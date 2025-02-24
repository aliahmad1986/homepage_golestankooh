import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit132Page } from './suit132.page';

const routes: Routes = [
  {
    path: '',
    component: Suit132Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit132PageRoutingModule {}
