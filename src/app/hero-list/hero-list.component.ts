import {toSignal} from "@angular/core/rxjs-interop";
import {Component, ElementRef, inject, OnInit, Signal, ViewChild} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {combineLatest, debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith, Subject} from "rxjs";

import {HeroService} from "../core/hero-service";

@Component({
  selector: 'app-hero-list',
  standalone: true,
  template: `
      <input
              #heroFilter
              type="text"
              class="w-full rounded-lg bg-slate-900
    border border-solid border-white p-2 mb-4 outline-0"
              (input)="inputChange.next($event)"
      />
      <div
              *ngFor="let hero of heroes()"
              class="bg-slate-900 shadow-2xl rounded-lg p-4 mb-2"
      >
          {{hero.name}}
      </div>
  `,
  styleUrls: ['./hero-list.component.scss'],
  imports: [CommonModule, NgFor]
})
export class HeroListComponent implements OnInit {
  inputChange = new Subject<any>();
  private heroService = inject(HeroService);
  private searchTerm$ = this.inputChange.pipe(
    debounceTime(300),
    map(event => event.target.value),
    distinctUntilChanged(),
    startWith('')
  );

  heroes = toSignal(
    combineLatest([
      this.heroService.getHeroes(),
      this.searchTerm$
    ]).pipe(
      map(([heroes, searchTerm]) => heroes
        .filter(hero =>
          hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    )
  );

  ngOnInit(): void {
  }

}
