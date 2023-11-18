import {Component, OnInit} from '@angular/core';
import {Cancion} from "./cancion";
import {CancionService} from "./cancion.service";

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit{
  datosCanciones:any;
  constructor(private cancionService : CancionService) {
  }
  ngOnInit() {
    this.cancionService.getCancionesConGenero().subscribe((data) =>{
      this.datosCanciones = data;
    });
  }
}
