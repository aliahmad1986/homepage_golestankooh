import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Royalsuits4bedPage } from './royalsuits4bed.page';

const routes: Routes = [
  {
    path: '',
    component: Royalsuits4bedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Royalsuits4bedPageRoutingModule {}
