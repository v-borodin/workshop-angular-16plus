import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Challenge5Component } from '../../challenges/challenge-5/challenge-5.component';

@Component({
  selector: 'app-challenge-5-view',
  standalone: true,
  imports: [Challenge5Component],
  template: `
    <app-challenge-5 class="wrapper" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge5ViewComponent {}
