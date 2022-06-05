import { Component } from '@angular/core';
import { Empleado } from './empleado.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados:Empleado[] = [
    new Empleado("Santiago", "Viana", "Presidente", 1000),
    new Empleado("Tomás", "Viana", "Vendedor", 500),
    new Empleado("María", "Viana", "Gerente", 670),
    new Empleado("Isolina", "Viana", "Tesorera", 500),
  ];

  agregarEmpleado() {

    let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(newEmpleado);
    
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
}
