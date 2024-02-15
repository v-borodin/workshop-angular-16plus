import { Directive, effect, ElementRef, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { fromEvent, map } from 'rxjs';

@Directive({
  standalone: true,
  selector: 'input[autoSave]',
  host: {
    '[value]': 'value()',
  },
})
export class AutoSaveDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>).nativeElement;

  protected readonly value = toSignal(fromEvent(this.el, 'input').pipe(map(() => this.el.value)), {
    initialValue: localStorage.getItem(this.key) || '',
  });

  get key(): string {
    return this.el.name;
  }

  constructor() {
    effect(() => {
      if (!this.value()) {
        localStorage.removeItem(this.key);
      } else {
        localStorage.setItem(this.key, this.value());
      }
    });
  }
}
