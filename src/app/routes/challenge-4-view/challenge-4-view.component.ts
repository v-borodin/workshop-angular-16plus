import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Challenge4Component } from '../../challenges/challenge-4/challenge-4.component';

@Component({
  selector: 'app-challenge-4-view',
  standalone: true,
  imports: [Challenge4Component],
  template: `
    <app-challenge-4 />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge4ViewComponent {}
