import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutoSavePreviewComponent } from '../../components/autosave-preview/auto-save-preview.component';

@Component({
  standalone: true,
  selector: 'app-auto-save-view',
  template: `
    <app-auto-save-preview />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AutoSavePreviewComponent],
})
export class AutoSaveViewComponent {}
