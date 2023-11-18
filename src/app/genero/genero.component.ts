import { Component } from '@angular/core';
import {GeneroService} from "./genero.service";

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent {

  datosGeneros: any;
  generoExpandido: number | null = null;

  constructor(private generoService : GeneroService) {
  }
  ngOnInit(){
    this.generoService.getGeneros().subscribe((data) =>{
      this.datosGeneros = data;
    });
  }
  toggleGenero(index: number): void {
    if (this.generoExpandido === index) {
      this.generoExpandido = null;
    } else {
      this.generoExpandido = index;
    }
  }
}
