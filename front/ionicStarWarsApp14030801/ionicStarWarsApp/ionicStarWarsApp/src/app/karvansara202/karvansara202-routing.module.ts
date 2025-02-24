import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara202Page } from './karvansara202.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara202Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara202PageRoutingModule {}
