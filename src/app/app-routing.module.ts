import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {GeneroComponent} from "./genero/genero.component";
import {CancionComponent} from "./cancion/cancion.component";

const routes: Routes = [
  {path:'', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: UserHomeComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'generos', component:GeneroComponent},
  {path: 'canciones', component: CancionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
