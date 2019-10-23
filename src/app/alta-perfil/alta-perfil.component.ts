import { Component, OnInit } from '@angular/core';
import { PerfilServicesService } from '../services/perfil-services.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Perfil } from '../models/perfil';


@Component({
  selector: 'app-alta-perfil',
  templateUrl: './alta-perfil.component.html',
  styleUrls: ['./alta-perfil.component.css']
})
export class AltaPerfilComponent implements OnInit {
form:FormGroup
perfil:Perfil;

//Con esta linea creo el servicio y el formulario
  constructor(private servicio:PerfilServicesService, private fb:FormBuilder) {
    //Senala al createForm de mas adelante
    this.createForm();
   }

  ngOnInit() {
  }

  //Preguntar lo de los corchetes y los validators y comillas sin nada
  createForm() {
    this.form = this.fb.group({
      id:null,
      alias:"",
      nombre:"",
      genero:"",
      edad:"",
      descripcion:"",
    })

  }

  get id(){return this.form.get('id');}
  get alias(){return this.form.get('alias')}
  get nombre(){return this.form.get('nombre')}
  get genero(){return this.form.get('genero')}
  get edad(){return this.form.get('edad')}
  get descripcion(){return this.form.get('descripcion')}

  //myForm->nombre que le pongo FormGroup->Tipo
  altaPerfil(myForm:FormGroup){
    this.perfil = new Perfil(
      myForm.get('id').value,
      myForm.get('alias').value,
      myForm.get('nombre').value,
      myForm.get('genero').value,
      myForm.get('edad').value,
      myForm.get('descripcion').value
    );

    /*id:Number;
alias:String;
nombre:String;
genero:Boolean;
edad:Number;
descripcion:String;*/

    this.servicio.altaPerfil(this.perfil).subscribe(
      (data:Perfil)=>{
        console.log(data);
      }
    )
      
  }
}
