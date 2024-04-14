import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';

import { validateEmail } from 'src/app/shared/utils/validateEmailUtil';
import { matchPasswordsValidator } from 'src/app/shared/utils/matchPasswordsValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerError: string | undefined;

  form = this.formBuilder.group({
    email: ['', [Validators.required, validateEmail(EMAIL_DOMAINS)]],
    passGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPass: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'confirmPass')]
      }
    )
  })

  get passGroup() {
    return this.form.get('passGroup');
  }
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }


  register(): void {
    if (this.form.invalid) return;
    const { email, passGroup: { password, confirmPass } = {} } =
      this.form.value;

    if (password !== confirmPass) {
      return;
    }
    this.userService.register(email!, password!).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.registerError = error.error.message;
        throw new Error(error.error.message);
      },
    });
  }
}
