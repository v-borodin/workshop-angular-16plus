import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Challenge3Component } from '../../challenges/challenge-3/challenge-3.component';

@Component({
  selector: 'app-challenge-3-view',
  standalone: true,
  imports: [Challenge3Component],
  template: `
    <app-challenge-3 />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge3ViewComponent {}
