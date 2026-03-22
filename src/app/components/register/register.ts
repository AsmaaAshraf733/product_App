import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormsModule,ReactiveFormsModule,Validators,ValidationErrors,AbstractControl} from '@angular/forms';
import { RouterModule } from '@angular/router';

export type ValidatorFn = (control: AbstractControl) => ValidationErrors | null;
@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  // private fb = inject(FormBuilder) //use inject instead of constructor
   // Reactive Form Definition
  userForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, this.noSpacesValidator]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordStrengthValidator]),
    confirmPassword: new FormControl('', [Validators.required])
  },
  //FIX: Angular expects a function receiving AbstractControl
  { validators: (control: AbstractControl) => this.passwordMatchValidator(control) });

  // Custom Validator: Username should not contain spaces
  noSpacesValidator(control: FormControl): ValidationErrors | null {
    if (control.value?.includes(' ')) {
      return { hasSpaces: true };
    }
    return null;
  }

  // Custom Validator: Password strength
  passwordStrengthValidator(control: FormControl): ValidationErrors | null {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    return !isValid ? { weakPassword: true } : null;
  }

  // Custom Validator: Confirm password matches
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  };


  onSubmit() {
    if (this.userForm.valid) {
      alert('form submitted successfully');
    } else {
      alert('please fix errors');
    }
  }
}


