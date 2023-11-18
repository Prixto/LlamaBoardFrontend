import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genero} from "./genero";

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  apiURLindex:string = "http://localhost:8080/generos/index";

  constructor(private http:HttpClient) { }

  getGeneros(): Observable<Genero[]>{
    return this.http.get<Genero[]>(this.apiURLindex);
  }

}
