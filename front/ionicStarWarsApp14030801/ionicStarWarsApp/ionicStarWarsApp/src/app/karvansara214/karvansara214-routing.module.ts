import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara214Page } from './karvansara214.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara214Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara214PageRoutingModule {}
