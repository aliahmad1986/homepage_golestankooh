import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suit131Page } from './suit131.page';

const routes: Routes = [
  {
    path: '',
    component: Suit131Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suit131PageRoutingModule {}
