import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara203Page } from './karvansara203.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara203Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara203PageRoutingModule {}
