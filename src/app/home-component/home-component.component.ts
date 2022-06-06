import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title = 'Listado de empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  empleados:Empleado[] = [];

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadoService) {

    //this.empleados = this.empleadosService.empleados;
    
  }

  ngOnInit(): void {
    
    //this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(response => {

      console.log(response);
      this.empleados = Object.values(response);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  agregarEmpleado() {

    let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.mostrarMensaje("información del empleado: " + newEmpleado.nombre);
    this.empleadosService.agregarEmpleadoNuevo(newEmpleado);
  }

}
