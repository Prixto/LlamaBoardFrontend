import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL:string = 'http://localhost:8080/usuarios/login'


  constructor(private http: HttpClient) { }

  verificarUsuario(email: string, password: string): Observable<any> {
    const body = {
      username: email,
      password: password
    };
    return this.http.post(this.apiURL, body);
  }

}
