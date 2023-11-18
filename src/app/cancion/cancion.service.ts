import { Injectable } from '@angular/core';
import {Cancion} from "./cancion";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private apiURL : string = 'http://localhost:8080/canciones/conGenero'
  constructor(private http: HttpClient) { }

  getCancionesConGenero(): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.apiURL);
  }

}
