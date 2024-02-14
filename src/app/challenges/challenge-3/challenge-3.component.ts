import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';

const USER_STORE = { name: 'Slavo', age: 25 };

@Component({
  standalone: true,
  selector: 'app-challenge-3',
  template: `
    @if (user) {
      {{ user.name }} {{ user.age }}
    }
    <button (click)="loadUser()" type="button">Load user</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge3Component implements AfterViewChecked {
  user?: Record<string, any>;

  loadUser(): void {
    of(USER_STORE).subscribe(user => (this.user = user));
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
