import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notify-one',
  templateUrl: './notify-one.component.html',
  styleUrls: ['./notify-one.component.css']
})
export class NotifyOneComponent implements OnInit {
    @Input() texto: string;
    @Input() tipo: string;
    @Input() accion: string;
    constructor() { }

    ngOnInit() {
    }

}
