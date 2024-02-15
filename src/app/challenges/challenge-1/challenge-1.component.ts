import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { UserComponent } from './user/users.component';

@Component({
  standalone: true,
  selector: 'app-challenge-1',
  template: `
    <app-user [user]="user" />
    <button (click)="toggleUser()" type="button">Toggle user</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UserComponent],
})
export class Challenge1Component implements AfterViewChecked {
  user = { name: 'Yozef', enabled: true };

  toggleUser(): void {
    this.user = {
      ...this.user,
      enabled: !this.user.enabled,
    };
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
