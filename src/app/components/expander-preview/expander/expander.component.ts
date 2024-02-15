import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-expander',
  template: `
    @if (showContent()) {
      <div class="expander-wrapper">
        <ng-content />
      </div>
    }
  `,
  host: {
    '[class.expanded]': 'expanded()',
    '(transitionend)': 'animationState.set("idle")',
  },
  styleUrls: ['./expander.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpanderComponent {
  protected animationState = signal('idle');

  showContent = computed(() => this.expanded() || this.animationState() === 'transition');

  expanded = input(false);

  constructor() {
    effect(
      () => {
        if (!this.expanded()) {
          this.animationState.set('transition');
        }
      },
      { allowSignalWrites: true },
    );
  }
}
