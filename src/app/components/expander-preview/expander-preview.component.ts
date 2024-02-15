import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpanderComponent } from './expander/expander.component';

@Component({
  standalone: true,
  selector: 'app-expander-preview',
  template: `
    <button (click)="show = !show" class="mb-2" type="button">Show</button>

    <app-expander [expanded]="show">
      <img width="300" src="assets/dog.png" alt="Dog" />
    </app-expander>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpanderComponent],
})
export class ExpanderPreviewComponent {
  show = false;
}
