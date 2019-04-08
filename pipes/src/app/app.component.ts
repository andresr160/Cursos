import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Andres';
  nombre2 = 'andres felipe rueda giraldo';
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  fecha = new Date();
  video = 'yDkbla8ReDM';
  activar: boolean = true;

}
