import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-challenge-2',
  template: `
    @if (show) {
      <p>Hint</p>
    }
    <button (mouseenter)="showHint()" type="button">Hint</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge2Component implements AfterViewChecked {
  show = false;

  showHint(): void {
    setTimeout(() => (this.show = true), 250);
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
