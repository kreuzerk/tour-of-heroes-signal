import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./core/header/header.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <toh-header/>
      <section class="p-4">
          <router-outlet></router-outlet>
      </section>
  `,
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent
  ],
})
export class AppComponent {
}
