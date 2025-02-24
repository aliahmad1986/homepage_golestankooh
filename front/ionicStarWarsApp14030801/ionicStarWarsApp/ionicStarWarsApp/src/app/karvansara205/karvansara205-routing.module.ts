import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara205Page } from './karvansara205.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara205Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara205PageRoutingModule {}
