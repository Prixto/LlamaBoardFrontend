import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cancion} from "../cancion/cancion";

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  private apiURL:string = "http://localhost:8080/canciones/conGenero"
  constructor(private http: HttpClient) {}

  getCanciones(): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.apiURL);
  }
}
