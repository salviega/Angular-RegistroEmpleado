import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadoService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  constructor() {
  }

  ngOnInit(): void {
    
  }
}
