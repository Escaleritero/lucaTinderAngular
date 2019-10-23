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



}
