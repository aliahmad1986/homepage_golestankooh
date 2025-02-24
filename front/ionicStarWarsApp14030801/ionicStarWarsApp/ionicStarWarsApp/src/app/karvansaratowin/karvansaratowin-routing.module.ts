import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarvansaratowinPage } from './karvansaratowin.page';

const routes: Routes = [
  {
    path: '',
    component: KarvansaratowinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarvansaratowinPageRoutingModule {}
