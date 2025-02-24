import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara213Page } from './karvansara213.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara213Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara213PageRoutingModule {}
