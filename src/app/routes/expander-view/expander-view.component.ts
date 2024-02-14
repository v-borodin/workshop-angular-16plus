import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpanderPreviewComponent } from '../../components/expander-preview/expander-preview.component';

@Component({
  standalone: true,
  selector: 'app-expander-view',
  template: `
    <app-expander-preview />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpanderPreviewComponent],
})
export class ExpanderViewComponent {}
