import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.scss'],
})
export class RecetteListComponent implements OnInit {
  @Input() public recettes;
  constructor() {}

  ngOnInit() {}
}
