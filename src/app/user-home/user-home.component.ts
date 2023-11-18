import { Component } from '@angular/core';
import {CancionComponent} from "../cancion/cancion.component";
import {UserHomeService} from "./user-home.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  datos: any;
  constructor(private userHomeService: UserHomeService) {
  }

  ngOnInit (){
    this.userHomeService.getCanciones().subscribe((data) =>{
      this.datos = data;
    });
  }
}
