import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './users/registration/registration.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
