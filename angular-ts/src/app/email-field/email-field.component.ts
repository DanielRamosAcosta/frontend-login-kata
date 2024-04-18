import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-field',
  standalone: true,
  imports: [],
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmailFieldComponent,
      multi: true,
    },
  ],
})
export class EmailFieldComponent implements ControlValueAccessor {
  @Input() identifier!: string;
  @Input() label!: string;
  value = '';
  onChange!: (value: string) => void;

  changeText($event: any) {
    this.onChange($event.target.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }
}
