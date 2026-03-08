import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonListComponent implements OnInit {

  pokemones:any[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){

    this.pokemonService.obtenerPrimeros151()
    .subscribe((data:any)=>{

      this.pokemones = data.results;

    });

  }

}