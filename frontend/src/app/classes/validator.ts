import { AbstractControl } from '@angular/forms';

const MIN_LENGTH = 5;

export const validateLength = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
    return { shortError: true };
  }

  return null;
};
