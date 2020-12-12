import { AbstractControl, ValidationErrors } from '@angular/forms';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

type ValidatorFn = (control: AbstractControl) => ValidationErrors | null;

export const validateUsername = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
    return { shortError: true };
  }

  return null;
};

export const validatePassword = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (control.value.length < MIN_LENGTH) {
    return { shortError: true };
  }

  return null;
};

export const confirmPassword = (p1: string, p2: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // Validaton code here
    console.log(p1, p2);
    return null;
  };
};
