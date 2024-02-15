import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';

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
  private readonly cdr = inject(ChangeDetectorRef);

  show = false;

  showHint(): void {
    setTimeout(() => {
      this.show = true;
      this.cdr.markForCheck();
    }, 250);
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
