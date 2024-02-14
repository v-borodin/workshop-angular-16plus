import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-challenge-5',
  template: `
    {{ successMessage }}
    <div class="trigger" id="trigger">CLICK ME</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge5Component implements AfterViewChecked {
  private readonly r2 = inject(Renderer2);

  successMessage = '';

  constructor() {
    const { nativeElement } = inject(ElementRef<HTMLElement>);

    this.r2.listen(nativeElement, 'mousemove', ({ target }) => {
      if (target.id === 'trigger') {
        this.successMessage = 'Dosiahli ste trigger!';
      }
    });
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
