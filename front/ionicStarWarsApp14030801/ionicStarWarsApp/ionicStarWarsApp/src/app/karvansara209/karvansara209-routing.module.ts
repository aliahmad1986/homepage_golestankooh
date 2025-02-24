import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara209Page } from './karvansara209.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara209Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara209PageRoutingModule {}
