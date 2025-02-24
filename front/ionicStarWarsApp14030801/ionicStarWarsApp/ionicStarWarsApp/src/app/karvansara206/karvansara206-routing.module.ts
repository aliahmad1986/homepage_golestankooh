import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara206Page } from './karvansara206.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara206Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara206PageRoutingModule {}
