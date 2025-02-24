import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { karvansara201Page } from './karvansara201.page';

const routes: Routes = [
  {
    path: '',
    component: karvansara201Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Karvansara201PageRoutingModule {}
