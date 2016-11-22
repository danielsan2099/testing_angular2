import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css']
})
export class NotifyMeComponent implements OnInit {
  is_visible = false;
  constructor() { }

  ngOnInit() {
  }

  public btn_click(){
    //Averiguar como colocar la ventana en los margenes visibles de la pantalla
    //var elemento = document.getElementById('id_del_elemento');
    //var posicion = elemento.getBoundingClientRect();
    this.is_visible = !this.is_visible;
  }

}
