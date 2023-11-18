import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../DB/usuario/usuario";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiURL:string = 'http://localhost:8080/usuarios/signup'

  constructor(private http: HttpClient) { }

  public registerUser( userData : Usuario){
    return this.http.post(this.apiURL,userData)
  }
}
