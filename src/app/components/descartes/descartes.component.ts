import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilServicesService } from 'src/app/services/perfil-services.service';


@Component({
  selector: 'app-descartes',
  templateUrl: './descartes.component.html',
  styleUrls: ['./descartes.component.css']
})
export class DescartesComponent implements OnInit {
  perfiles:Perfil[];
  perfil:Perfil;
  constructor(private service:PerfilServicesService) { 
    this.service.getSesion().subscribe(
      data=>{
        this.perfil = data;
        this.poblarPerfiles();
        console.log("HOLA ");
        console.log(data);
      }
    )
  }

  async ngOnInit() {
  }

  poblarPerfiles(){
    this.service.contactosDescartados().subscribe(
      (data:Perfil[])=>{
        this.perfiles = data;
        console.log("DEBERIA ESTAR PRIMERO")
        console.log(data);
      }
    )
  }

}
