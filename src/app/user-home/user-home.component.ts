import { Component } from '@angular/core';
import {UserHomeService} from "./user-home.service";

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

  votarPorCancion(cancionId: number) {

  }
}
