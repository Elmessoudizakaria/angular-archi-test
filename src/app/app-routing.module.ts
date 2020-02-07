import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/recette/recette.module').then(md => md.RecetteModule),
  },
  {
    path: 'ingredient',
    loadChildren: () =>
      import('./features/ingredient/ingredient.module').then(md => md.IngredientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
