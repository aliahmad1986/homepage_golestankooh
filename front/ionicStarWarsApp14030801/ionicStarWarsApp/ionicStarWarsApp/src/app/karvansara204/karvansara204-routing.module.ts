import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara204Page } from './karvansara204.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara204Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara204PageRoutingModule {}
