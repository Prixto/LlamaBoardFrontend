import { Component } from '@angular/core';
import {Usuario} from "../DB/usuario/usuario";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "LlamaBeats";
  user: Usuario;




}
