import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Challenge2Component } from '../../challenges/challenge-2/challenge-2.component';

@Component({
  selector: 'app-challenge-2-view',
  standalone: true,
  imports: [Challenge2Component],
  template: `
    <app-challenge-2 />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge2ViewComponent {}
