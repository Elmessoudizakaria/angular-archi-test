import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteContainer } from './containers/recette/recette.container';
import { AddRecetteComponent } from './components/add-recette/add-recette.component';

const routes: Routes = [
  {
    path: '',
    component: RecetteContainer,
  },
  {
    path:'add-recette',
    component: AddRecetteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteRoutingModule {}
