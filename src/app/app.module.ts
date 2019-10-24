import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaPerfilComponent } from './alta-perfil/alta-perfil.component';
<<<<<<< Updated upstream
=======
import { DislikeComponent } from './components/dislike/dislike.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    AltaPerfilComponent
=======
    AltaPerfilComponent,
    DislikeComponent,
    ListadoComponent,
    PerfilComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
