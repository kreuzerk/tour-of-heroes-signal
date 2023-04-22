import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'toh-header',
  standalone: true,
  template: `
      <nav class="bg-purple-900 h-16 flex items-center p-4 text-lg">
          <a class="mr-2" routerLink="list" routerLinkActive="underline">List</a>
          <a class="mr-2 " routerLink="edit/1" routerLinkActive="underline">Edit</a>
          <a class="mr-2" routerLink="registration" routerLinkActive="underline">Registration</a>
      </nav>`,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class HeaderComponent {

}
