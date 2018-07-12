import { FormGroup, ValidationErrors } from '@angular/forms';

export const notEqualValidator = (name1: string, name2: string) => {
  return (group: FormGroup): ValidationErrors | null => {
    const c1 = group.get(name1);
    const c2 = group.get(name2);
    return c1 && c2 && c1.value === c2.value ? null : { 'notEqual': true };
  };
};




