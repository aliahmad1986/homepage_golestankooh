import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara218Page } from './karvansara218.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara218Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara218PageRoutingModule {}
