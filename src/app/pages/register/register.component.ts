import { RegisterService } from './../../shared/services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/shared/validators/equal.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  get registerFormValue() {
    return this.registerForm.value;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
    private readonly router: Router
    ) {
    this.registerForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.min(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
      confirmPassword: ['', [Validators.required]]
    },
    { 
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
   }

  ngOnInit(): void {
  }

  save() {
    this.registerService.register(this.registerFormValue)
      .pipe(take(1))
      .subscribe(() => {
        alert('User successfully registered');
        this.router.navigate(['photos']);
      });
  }

}
