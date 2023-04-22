import {toSignal} from "@angular/core/rxjs-interop";
import {Component, ElementRef, inject, Injector, OnInit, runInInjectionContext, Signal, ViewChild} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {combineLatest, debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith} from "rxjs";

import {HeroService} from "../core/hero-service";
import {Hero} from "../shared/hero.model";

@Component({
  selector: 'app-hero-list',
  standalone: true,
  template: `
    <input
      #heroFilter
      type="text"
      class="w-full rounded-lg bg-slate-900
    border border-solid border-white p-2 mb-4 outline-0"/>

    <div
      *ngFor="let hero of heroes()"
      class="bg-slate-900 shadow-2xl rounded-lg p-4 mb-2"
    >
      {{hero.name}}
    </div>
  `,
  imports: [CommonModule, NgFor]
})
export class HeroListComponent implements OnInit {
  @ViewChild('heroFilter', {static: true}) heroFilter: ElementRef | undefined;

  heroes!: Signal<Hero[]>;
  injector = inject(Injector);
  private heroService = inject(HeroService);

  ngOnInit(): void {
    const searchTerm$ = fromEvent(this.heroFilter?.nativeElement, 'input').pipe(
      debounceTime(300),
      map(() => this.heroFilter?.nativeElement.value),
      distinctUntilChanged(),
      startWith('')
    );

    runInInjectionContext(this.injector, () => {
      this.heroes = toSignal(
        combineLatest([
          this.heroService.getHeroes(),
          searchTerm$
        ]).pipe(
          map(([heroes, searchTerm]) => heroes
            .filter(hero =>
              hero.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        ),
        {
          initialValue: []
        }
      );
    });
  }

}
