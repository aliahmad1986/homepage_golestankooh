import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara220Page } from './karvansara220.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara220Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara220PageRoutingModule {}
