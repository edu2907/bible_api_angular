import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formUser!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.formUser = new FormGroup({
      name: new FormControl(user.name),
      email: new FormControl(user.email),
      password: new FormControl(user.password),
      notifications: new FormControl(user.notifications)
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formUser.value);

    // chamando a função createForm para limpar os campos na tela
    this.createForm(new User());
  }
}
