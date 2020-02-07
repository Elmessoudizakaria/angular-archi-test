import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteContainer } from './containers/recette/recette.container';

const routes: Routes = [
  {
    path: '',
    component: RecetteContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteRoutingModule {}
