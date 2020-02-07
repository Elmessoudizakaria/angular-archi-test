import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.container.html',
  styleUrls: ['./recette.container.scss'],
})
export class RecetteContainer implements OnInit {
  recettes$: Observable<any[]>;
  constructor(private readonly service: RecetteService) {}

  ngOnInit() {
    this.loadRecette();
  }

  loadRecette() {
    this.recettes$ = this.service.recetteList();
  }
}
