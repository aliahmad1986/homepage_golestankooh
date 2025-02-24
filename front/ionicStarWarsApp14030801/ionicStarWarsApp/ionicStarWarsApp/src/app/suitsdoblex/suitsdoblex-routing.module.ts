import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitsdoblexPage } from './suitsdoblex.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsdoblexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitsdoblexPageRoutingModule {}
