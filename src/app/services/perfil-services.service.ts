import { Injectable } from '@angular/core';

import { Perfil } from '../models/perfil';
import {HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PerfilServicesService {
  
  constructor(private http:HttpClient) {}
  private perfilUrl = 'http://localhost:8080/lucatinder';

  public altaPerfil(perfil) {
    return this.http.post<Perfil>(this.perfilUrl, perfil);
  }

  public getSesion(){
    return this.http.get<Perfil>(this.perfilUrl+"/get/sesion");
  }

  public contactos(id_perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl+'/listadoPerfiles/rest/'+id_perfil);
  }
  public contactoslikeados() {
    return this.http.get<Perfil[]>(this.perfilUrl+'/get/likeados/');
  }
  public contactosDescartados() {
    return this.http.get<Perfil[]>(this.perfilUrl+'/get/descartes/');
  }
  public saveLike(idLike){
    return this.http.post(this.perfilUrl+"/saveLike/rest/"+idLike,httpOptions);
  }
  public saveDislike(idDislike){
    return this.http.post(this.perfilUrl+"/saveDislike/rest/"+idDislike,httpOptions);
  }


}
