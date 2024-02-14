import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Challenge1Component } from '../../challenges/challenge-1/challenge-1.component';

@Component({
  standalone: true,
  selector: 'app-challenge-1-view',
  template: `
    <app-challenge-1 />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Challenge1Component],
})
export class Challenge1ViewComponent {}
