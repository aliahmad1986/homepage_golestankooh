import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyalroomvipPage } from './royalroomvip.page';

const routes: Routes = [
  {
    path: '',
    component: RoyalroomvipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyalroomvipPageRoutingModule {}
