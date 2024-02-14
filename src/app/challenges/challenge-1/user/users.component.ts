import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>{{ user?.name }} {{ user?.enabled ? 'na mieste' : 'nedostupný' }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input()
  user?: { name: string; enabled: boolean };
}
