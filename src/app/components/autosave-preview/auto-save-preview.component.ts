import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutoSaveDirective } from '../../directives/auto-save.directive';

@Component({
  standalone: true,
  selector: 'app-auto-save-preview',
  template: `
    <form class="flex flex-col gap-y-2">
      <input name="email" type="email" autoSave />
      <input name="name" type="text" autoSave />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AutoSaveDirective],
})
export class AutoSavePreviewComponent {}
