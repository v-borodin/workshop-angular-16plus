import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { map, timer } from 'rxjs';

const checkEmailValidity = (email: string) =>
  timer(0).pipe(map(() => (email.endsWith('.sk') ? 'Neakceptuje sa domena .sk' : '')));

@Component({
  standalone: true,
  selector: 'app-challenge-4',
  template: `
    <input #inputElement (change)="checkEmail(inputElement)" type="email" />
    @if (errorMessage) {
      {{ errorMessage }}
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge4Component implements AfterViewChecked {
  private readonly cdr = inject(ChangeDetectorRef);

  errorMessage = '';

  checkEmail({ value }: HTMLInputElement): void {
    checkEmailValidity(value).subscribe(response => (this.errorMessage = response));
    this.cdr.markForCheck();
  }

  ngAfterViewChecked(): void {
    console.warn('Checked 🎉');
  }
}
