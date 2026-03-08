import { Component } from '@angular/core';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './app.html'
})
export class App {
}