import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit102Page } from './suit102.page';

const routes: Routes = [
  {
    path: '',
    component: Suit102Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit102PageRoutingModule {}
