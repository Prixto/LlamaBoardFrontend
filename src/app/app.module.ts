import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from "@angular/common/http";
import { CancionComponent } from './cancion/cancion.component';
import { GeneroComponent } from './genero/genero.component';
import { VotoComponent } from './DB/voto/voto.component';
import { UsuarioComponent } from './DB/usuario/usuario.component';
import {CancionService} from "./cancion/cancion.service";
import {FormsModule} from "@angular/forms";
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    UserHomeComponent,
    SignUpComponent,
    CancionComponent,
    GeneroComponent,
    VotoComponent,
    UsuarioComponent,
    SongComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [CancionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
