import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.bootstrap.css']
})
export class AppComponent {
  title = 'lucaTinderAngular';

  nombre: String = "";

  login(form){
    console.log(form.value); 
  }

}
