import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara208Page } from './karvansara208.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara208Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara208PageRoutingModule {}
