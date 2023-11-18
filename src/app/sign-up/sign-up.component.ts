import { Component } from '@angular/core';
import {SignUpService} from "./sign-up.service";
import {Usuario} from "../DB/usuario/usuario";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  usuario: Usuario = new Usuario();
  constructor(private signUpService : SignUpService) {
  }

  registrarUsuario() {
    this.usuario.tipoUsuario=false
    this.signUpService.registerUser(this.usuario).subscribe(
      (data) => {
        console.log('Usuario registrado con éxito', data);
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }

  validateForm() {
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
    //TODO: ROUTING DESDE EL TRUE
    return true;
  }
}
