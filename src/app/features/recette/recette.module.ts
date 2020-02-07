import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteListComponent } from './components/recette-list/recette-list.component';
import { RecetteContainer } from './containers/recette/recette.container';
import { RecetteRoutingModule } from './recette-routing.module';
import { RecetteService } from './services/recette.service';
import { HttpClientModule } from '@angular/common/http';
import { AddRecetteComponent } from './components/add-recette/add-recette.component';

@NgModule({
  declarations: [RecetteContainer, RecetteListComponent, AddRecetteComponent],
  imports: [CommonModule, RecetteRoutingModule, HttpClientModule],
  providers: [RecetteService],
})
export class RecetteModule {}
