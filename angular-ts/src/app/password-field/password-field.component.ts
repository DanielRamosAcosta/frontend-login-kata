import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [NgIf],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordFieldComponent,
      multi: true,
    },
  ],
})
export class PasswordFieldComponent {
  @Input() identifier!: string;
  @Input() label!: string;
  value = '';
  passwordIsVisible = false;
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

  togglePasswordVisibility() {
    this.passwordIsVisible = !this.passwordIsVisible;
  }
}
