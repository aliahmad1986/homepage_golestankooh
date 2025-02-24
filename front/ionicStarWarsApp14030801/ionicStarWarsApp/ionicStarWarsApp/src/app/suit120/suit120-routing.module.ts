import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit120Page } from './suit120.page';

const routes: Routes = [
  {
    path: '',
    component: Suit120Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit120PageRoutingModule {}
