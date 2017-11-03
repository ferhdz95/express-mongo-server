import { Component } from '@angular/core';
import {CatService} from './gatitos/gatitos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CatService]
})
export class AppComponent {
  title: String = 'iTexico';
  body: String = 'Este es un ejemplo de la variable body';
}
