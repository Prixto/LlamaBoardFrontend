import { Component } from '@angular/core';
import {SignUpService} from "./sign-up.service";
import {Usuario} from "../DB/usuario/usuario";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  usuario: Usuario = new Usuario();
  constructor(private signUpService : SignUpService, private cookieService: CookieService,private router: Router) {
  }



  registrarUsuario() {
    this.usuario.tipoUsuario = false;

    this.signUpService.registerUser(this.usuario).subscribe(
      (data: any) => {
        console.log('Usuario registrado con éxito', data);

        if (data && data.token) {
          this.cookieService.set('miToken', data.token);

          if (this.validateForm()) {
            this.router.navigate(['home']);
          } else {
            console.error('Router no está disponible');
          }
        } else {
          console.error('La respuesta del servidor no contiene un token válido');
        }
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }
  validateForm(): boolean {
    const formFields = document.querySelectorAll('.sign-up__field');

    // @ts-ignore
    for (const field of formFields) {
      const input = field.querySelector('input');
      const inputValue = input.value;

      if (!inputValue) {
        alert('El campo ' + input.placeholder + ' es obligatorio');
        return false;
      }
    }
    return true;
  }
}
