import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara207Page } from './karvansara207.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara207Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara207PageRoutingModule {}
