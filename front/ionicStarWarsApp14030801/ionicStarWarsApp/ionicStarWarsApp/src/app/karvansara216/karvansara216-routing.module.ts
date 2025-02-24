import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara216Page } from './karvansara216.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara216Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara216PageRoutingModule {}
