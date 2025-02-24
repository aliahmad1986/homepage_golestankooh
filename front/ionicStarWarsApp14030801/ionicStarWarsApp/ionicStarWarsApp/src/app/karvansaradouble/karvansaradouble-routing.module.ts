import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarvansaradoublePage } from './karvansaradouble.page';

const routes: Routes = [
  {
    path: '',
    component: KarvansaradoublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarvansaradoublePageRoutingModule {}
