import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() nombre: string; // Acepta el nombre de la canción
  @Input() artista: string;

  constructor() {}

  quitarAcentos(cadena: string): string {
    return cadena
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/(\s+)/g, '_')
      .toLowerCase();
  }
  getImagenUrl(): string {
    const nombreArchivo = this.quitarAcentos(this.nombre);
    return `assets/img/songs/${nombreArchivo}.jpg`;
  }


}
