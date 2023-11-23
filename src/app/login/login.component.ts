import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensajeError: string | null = null;

  constructor(private loginService:LoginService, private router:Router, private cookieService: CookieService) {
  }

  verificarUsuario(email: string, password: string) {
    this.loginService.verificarUsuario(email, password).subscribe(
      (data) => {
        console.log('Usuario verificado con éxito', data);
        if (data && data.token) {
          this.cookieService.set('Autenticado', data.token);
          this.router.navigate(['home']);

        } else {
          console.error('La respuesta del servidor no contiene un token válido');
        }

      },
      (error) => {
        console.error('Error al verificar el usuario', error);
        this.mensajeError = 'Credenciales incorrectas';
      }
    );
  }
}
