import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  title = 'Listado de empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  empleados:Empleado[] = [];

  constructor(private miServicio:ServicioEmpleadosService, 
    private empleadosService:EmpleadoService, 
    private router:Router) {

    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    
    this.empleados = this.empleadosService.empleados;
  }

  agregarEmpleado() {

    let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.mostrarMensaje("información del empleado: " + newEmpleado.nombre);
    this.empleadosService.agregarEmpleadoNuevo(newEmpleado);
    this.router.navigate([""]);
  }

  volverHome() {

    this.router.navigate([""]);
  }

}
