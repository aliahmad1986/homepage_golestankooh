import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit103Page } from './suit103.page';

const routes: Routes = [
  {
    path: '',
    component: Suit103Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit103PageRoutingModule {}
