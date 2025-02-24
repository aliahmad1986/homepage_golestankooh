import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Royalsuits2beddoublePage } from './royalsuits2beddouble.page';

const routes: Routes = [
  {
    path: '',
    component: Royalsuits2beddoublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Royalsuits2beddoublePageRoutingModule {}
