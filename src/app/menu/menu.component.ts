import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public menus: Menu[];
    constructor() {
        this.menus = [
            new Menu('Home', '#/', 'fa_info', 'link', null),
            new Menu('Menus', '#/menus', 'fa_info', 'link', [
                                                new Menu('Editar', '#/menus/editar', 'add', 'link', null),
                                                new Menu('Crear', '#/menus/crear', 'sort', 'link', null)
                                        ]),
        ];
    }

    ngOnInit() {

    }

}
class Menu{
    public titulo: string;
    public url: string;
    public icono: string;
    public hijos: Menu[];
    constructor(titulo: string, url: string, icono: string, tipo: string, menu: Menu[]) {
        this.titulo = titulo;
        this.url = url;
        this.icono = icono;
        this.hijos = menu;
    }
}
