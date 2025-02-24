import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara217Page } from './karvansara217.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara217Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara217PageRoutingModule {}
