import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import {Hero} from "../shared/hero.model";

import {HEROES} from "./mock-backend";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*
  Usually, you would use the HTTP client to fetch data from a remote server.
  */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
