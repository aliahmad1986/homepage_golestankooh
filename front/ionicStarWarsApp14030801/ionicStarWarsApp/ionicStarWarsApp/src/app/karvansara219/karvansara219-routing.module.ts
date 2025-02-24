import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Karvansara219Page } from './karvansara219.page';

const routes: Routes = [
  {
    path: '',
    component: Karvansara219Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara219PageRoutingModule {}
