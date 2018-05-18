import { Injectable } from '@angular/core';
import { HEROES } from './../mock-heroes'; // our hero list
import { Hero } from './../hero'; // our hero type
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  public getHeroes(): Observable<Hero[]> {
    return of (HEROES);
  }
}
