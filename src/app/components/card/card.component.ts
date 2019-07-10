import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {

  @Input() movie;
  @Output() message = new EventEmitter<string>();

constructor(private router: Router) { }

ngOnInit() {
  }


emitToMyFather() {
    // Emitir el mensaje padre
this.message.emit(`Pagina de movie ${this.movie.id} emitida`);

    // Navegar a la pagina de detalle
this.router.navigate(['profile', this.movie.id]);
  }
}
