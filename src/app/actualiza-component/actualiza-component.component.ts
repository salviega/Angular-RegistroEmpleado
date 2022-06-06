import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  title = 'Listado de empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  indice:number;

  accion:number;

  empleados:Empleado[] = [];

  constructor(private miServicio:ServicioEmpleadosService, 
    private empleadosService:EmpleadoService, 
    private router:Router,
    private route:ActivatedRoute) {

    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    
    this.accion = parseInt(this.route.snapshot.queryParams["accion"]);
    this.empleados = this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;


  }

  /*actualizarEmpleado() {

    let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.mostrarMensaje("información del empleado: " + newEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice, newEmpleado);
    this.router.navigate([""]);
  }

  eliminarEmpleado() {

    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);

  }*/

  actualizarEmpleado() {

    if (this.accion == 1) {
      
      let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.mostrarMensaje("información del empleado: " + newEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice, newEmpleado);
      this.router.navigate([""]);
    } else {
      
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate([""]);
    }

    
  }

  volverHome() {

    this.router.navigate([""]);
  }

}
