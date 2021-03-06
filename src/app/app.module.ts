import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaPerfilComponent } from './alta-perfil/alta-perfil.component';
import { DislikeComponent } from './components/dislike/dislike.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { DescartesComponent } from './components/descartes/descartes.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaPerfilComponent,
    DislikeComponent,
    ListadoComponent,
    PerfilComponent,
    ContactosComponent,
    DescartesComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
