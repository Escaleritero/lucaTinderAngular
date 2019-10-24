import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilServicesService } from 'src/app/services/perfil-services.service';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() perfilContacto:number;
  constructor(private service:PerfilServicesService) { }

  ngOnInit() {
  }

  enviarResultado(result:boolean){
    if(result){
      this.service.saveLike(this.perfilContacto).subscribe();
    } else
    this.service.saveDislike(this.perfilContacto).subscribe();
  }
}
