import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaPerfilComponent } from './alta-perfil/alta-perfil.component';
import { DislikeComponent } from './components/dislike/dislike.component';
import { ListadoComponent } from './components/listado/listado.component';


const routes: Routes = [
  {path:"crear",component:AltaPerfilComponent},
  {path:"dislike",component:DislikeComponent},
  {path:"listado", component:ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
