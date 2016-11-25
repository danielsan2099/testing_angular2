import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {NotifyMeService} from './notify-me.service';

@Component({
  selector: 'notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css'],
  providers:[NotifyMeService]
})
export class NotifyMeComponent implements OnInit {
    is_visible = false;
    public result;
    public errorMessage;
    constructor(private _notifyService: NotifyMeService) {
                      // Llamamos al método del servicio
    this._notifyService.getNotify()
                        .subscribe(
                            result => {
                                    this.result = result;
                                    console.log(this.result);
                            },
                            error => {
                                this.errorMessage = <any>error;

                                if(this.errorMessage !== null){
                                    console.log(this.errorMessage);
                                    alert("Error en la petición");
                                }
                            }
                        );
  }

  ngOnInit() {
  }

  public btn_click(){
    //Averiguar como colocar la ventana en los margenes visibles de la pantalla
    //var elemento = document.getElementById('id_del_elemento');
    //var posicion = elemento.getBoundingClientRect();
    this.is_visible = !this.is_visible;
  }

}
