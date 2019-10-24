import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaPerfilComponent } from './alta-perfil/alta-perfil.component';
import { DislikeComponent } from './components/dislike/dislike.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { DescartesComponent } from './components/descartes/descartes.component';


const routes: Routes = [
  {path:"crear",component:AltaPerfilComponent},
  {path:"dislike",component:DislikeComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"listado", component:ListadoComponent},
  {path:"likeados", component:ContactosComponent},
  {path:"descartes", component:DescartesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
