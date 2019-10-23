import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaPerfilComponent } from './alta-perfil/alta-perfil.component';


const routes: Routes = [
  {path:"crear",component:AltaPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
