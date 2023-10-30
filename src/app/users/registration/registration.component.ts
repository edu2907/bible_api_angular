import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  formUser!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.formUser = new FormGroup({
      name: new FormControl(user.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(user.password, [
        Validators.minLength(6),
      ]),
      notifications: new FormControl(user.notifications)
    })
  }

  onSubmit() {
    if (this.formUser.valid) {
      // Form is valid, proceed with saving or submitting the data.
      console.log(this.formUser.value);

      // Calling the function createForm to reset the form
      this.createForm(new User());
    } else {
      // Form is not valid, handle validation errors or display messages.
      console.log('Form is not valid');
    }
  }
}
