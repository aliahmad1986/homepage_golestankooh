import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara215Page } from './karvansara215.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara215Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara215PageRoutingModule {}
