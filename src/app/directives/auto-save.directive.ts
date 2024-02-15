import { Directive } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[autoSave]',
})
export class AutoSaveDirective {}
