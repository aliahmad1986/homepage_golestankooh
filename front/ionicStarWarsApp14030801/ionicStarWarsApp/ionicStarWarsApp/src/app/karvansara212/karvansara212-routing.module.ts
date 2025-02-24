import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara212Page } from './karvansara212.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara212Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara212PageRoutingModule {}
