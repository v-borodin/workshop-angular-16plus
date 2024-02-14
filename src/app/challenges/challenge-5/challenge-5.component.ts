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
    <div style="position: absolute; background: red" id="trigger">CLICK ME</div>
  `,
  host: {
    style: 'position: relative; width: 500px; height: 500px; display: block; border: 2px solid red',
  },
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
