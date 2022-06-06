import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {

    url:string = 'https://mis-clientes-f64b3-default-rtdb.firebaseio.com/datos.json';
    constructor(private http:HttpClient) {}

    cargarEmpleados() {

        return this.http.get(this.url);
    }
    
    guardarEmpleados(empleados:Empleado[]) {

        this.http.put(this.url, empleados).subscribe(response => {
          console.log("se almacenaron los datos: " + response);      
        });
    }

    actualizarEmpleados(indice:number, empleado:Empleado) {

        let newUrl = 'https://mis-clientes-f64b3-default-rtdb.firebaseio.com/datos/';
        let empleadoUrl = newUrl+indice+'.json';

        this.http.put(empleadoUrl, empleado).subscribe(response => {
            console.log("se modificó el empleado: " + response);      
          });

    }
    
    eliminarEmpleados(indice:number) {

        let newUrl = 'https://mis-clientes-f64b3-default-rtdb.firebaseio.com/datos/';
        let empleadoUrl = newUrl+indice+'.json';

        this.http.delete(empleadoUrl).subscribe(response => {
            console.log("se eliminó el empleado: " + response);      
          });

    }
}