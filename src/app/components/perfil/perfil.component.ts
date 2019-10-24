import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Perfil } from '../../models/perfil';
import { PerfilServicesService } from 'src/app/services/perfil-services.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil:Perfil;
  constructor(private service:PerfilServicesService) {
    this.service.getSesion().subscribe(
      data=>{
        this.perfil= data;
      }
    )
   }

  ngOnInit() {
  }

}
