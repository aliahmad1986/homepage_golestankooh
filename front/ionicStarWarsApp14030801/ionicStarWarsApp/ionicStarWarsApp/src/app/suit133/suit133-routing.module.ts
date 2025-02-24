import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit133Page } from './suit133.page';

const routes: Routes = [
  {
    path: '',
    component: Suit133Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit133PageRoutingModule {}
