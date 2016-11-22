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
            new Menu('Home', '#', 'fa-home', 'link', null),
            new Menu('Menus', '#', 'fa-bars', 'link', [
                                                new Menu('Crear', '#/menus/crear', 'fa-plus', 'link', null),
                                                new Menu('Editar', '#/menus/editar', 'fa-pencil', 'link', null)
                                        ]),
            new Menu('Companies', '#', 'fa-building', 'link', [
                                                new Menu('My Companies', '#/company/my', 'fa-building-o', 'link', null),
                                                new Menu('Merge Companies', '#/company/crear', 'fa-code-fork', 'link', null),
                                                new Menu('Copy Company', '#/company/editar', 'fa-files-o', 'link', null)
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
