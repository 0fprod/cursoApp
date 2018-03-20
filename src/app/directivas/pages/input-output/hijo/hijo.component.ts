import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() texto: string;
  @Output() mensajeMarcado = new EventEmitter();
  mensaje : string;
  leido: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  detectar(event){
    this.mensaje = 'texto desde el hijo';
    this.mensajeMarcado.emit(this.mensaje);
  }

  marcar(event){
    this.leido = !this.leido;
  }

}
