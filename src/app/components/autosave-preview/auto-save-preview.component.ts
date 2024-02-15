import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoSaveDirective } from '../../directives/auto-save.directive';

@Component({
  standalone: true,
  selector: 'app-auto-save-preview',
  template: `
    <form class="flex flex-col gap-y-2">
      <input name="Email" type="email" autoSave />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, AutoSaveDirective],
})
export class AutoSavePreviewComponent {}
