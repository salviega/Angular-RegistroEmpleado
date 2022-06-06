import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoService {

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices) {}
    
    empleados:Empleado[] = [];
    /*empleados:Empleado[] = [
        new Empleado("Santiago", "Viana", "Presidente", 1000),
        new Empleado("Tomás", "Viana", "Vendedor", 500),
        new Empleado("María", "Viana", "Gerente", 670),
        new Empleado("Isolina", "Viana", "Tesorera", 500),
      ];*/

      setEmpleados(misEmpleados:Empleado[]) {

        this.empleados = misEmpleados;
        console.log(this.empleados);
      }

      obtenerEmpleados() {
        return this.dataService.cargarEmpleados();
      }
      
      agregarEmpleadoNuevo(newEmpleado:Empleado) {

        this.servicioVentanaEmergente.mostrarMensaje("información del empleado: " + newEmpleado.nombre);  
        this.empleados.push(newEmpleado);
        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number) {

        let empleado:Empleado = this.empleados[indice];
        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado) {

        let empleadoModificado:Empleado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

        this.dataService.actualizarEmpleados(indice, empleado);
      }

      eliminarEmpleado(indice:number) {

        this.empleados.splice(indice,1);

        this.dataService.eliminarEmpleados(indice);

        if (this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
      }
}