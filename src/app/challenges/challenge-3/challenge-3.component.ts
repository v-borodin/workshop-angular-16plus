import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';

const USER = { name: 'Slavo', age: 25 };

@Component({
  standalone: true,
  selector: 'app-challenge-3',
  template: `
    @if (user) {
      <p>{{ user.name }} {{ user.age }}</p>
    }
    <button (click)="loadUser()" type="button">Load user</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge3Component implements AfterViewChecked {
  user?: Record<string, any>;

  loadUser(): void {
    of(USER).subscribe(user => (this.user = user));
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
