import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarvansaravipPage } from './karvansaravip.page';

const routes: Routes = [
  {
    path: '',
    component: KarvansaravipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarvansaravipPageRoutingModule {}
