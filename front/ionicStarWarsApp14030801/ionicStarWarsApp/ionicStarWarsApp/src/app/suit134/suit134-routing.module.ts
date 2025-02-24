import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit134Page } from './suit134.page';

const routes: Routes = [
  {
    path: '',
    component: Suit134Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit134PageRoutingModule {}
