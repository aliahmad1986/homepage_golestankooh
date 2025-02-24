import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara210Page } from './karvansara210.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara210Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara210PageRoutingModule {}
