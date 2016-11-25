// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class NotifyMeService {

    constructor(private _http: Http){}

    getNotify(){
        // petición por get a esa url de un api rest de pruebas
        return this._http.get("https://jsonplaceholder.typicode.com/users")
                            .map(res => res.json());
    }

}
