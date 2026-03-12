import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})

export class Pagina1 {
  nombre: string = 'orlando';

  cambiarNombre() {
    if (this.nombre === 'orlando') {
      this.nombre = 'Maria';
    } else {
      this.nombre = 'orlando';
    }
  }

}
