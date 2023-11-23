import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cancion} from "../cancion/cancion";
import {VotoRequest} from "../DB/voto/voto-request";


@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  private apiURLCanciones:string = "http://localhost:8080/canciones/conGenero";
  private apiURLVotos = 'http://localhost:8080/votos/registrar';
  constructor(private http: HttpClient) {}

  getCanciones(): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.apiURLCanciones);
  }
  votarPorCancion(votoRequest: VotoRequest): Observable<string> {
    return this.http.post<string>(this.apiURLVotos, votoRequest);
  }



}
