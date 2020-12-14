import { AbstractControl } from '@angular/forms';

const MIN_LENGTH = 5;

// no symbol, space, min length = 5
export const validateUsername = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (
    /[~`!#$%\^&@*+=\-\[\]\\';,._/{}()|\\":<>\?]/g.test(control.value) ||
    control.value.includes(' ')
  ) {
    return { symbolError: true };
  }

  if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
    return { shortError: true };
  }

  return null;
};

// no space and min length = 5
export const validatePassword = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (control.value.includes(' ')) {
    return { spaceError: true };
  }

  if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
    return { shortError: true };
  }

  return null;
};
