import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.formUser = new FormGroup({
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(user.password, [
        Validators.minLength(6),
      ]),
    })
  }

  onSubmit() {
    if (this.formUser.valid) {
      // Form is valid, proceed with saving or submitting the data.
      console.log(this.formUser.value);

      // Calling the function createForm to reset the form
      this.createForm(new User());
      this.router.navigate(['/main']);
    } else {
      // Form is not valid, handle validation errors or display messages.
      console.log('Form is not valid');
    }
  }
}
