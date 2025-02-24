import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyalsuitsPage } from './royalsuits.page';

const routes: Routes = [
  {
    path: '',
    component: RoyalsuitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyalsuitsPageRoutingModule {}
