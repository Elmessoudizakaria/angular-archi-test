import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientContainer } from './containers/ingredient/ingredient.container';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientRoutingModule } from './ingredient-router.module';

@NgModule({
  declarations: [IngredientContainer, IngredientListComponent],
  imports: [CommonModule, IngredientRoutingModule],
})
export class IngredientModule {}
