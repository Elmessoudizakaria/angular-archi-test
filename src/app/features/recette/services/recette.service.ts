import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class RecetteService {
  constructor(private http: HttpClient) {}
  recetteList() {
    return this.http.get<any[]>('http://localhost:3500/recettes').pipe(
      map(el => el),
      catchError(err => err),
    );
  }
}
