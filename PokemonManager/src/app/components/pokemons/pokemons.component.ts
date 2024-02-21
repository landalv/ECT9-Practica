import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {
  pokemons = [{'id': 0, 'nombre': '', 'img': '', 'categoria': '', 'tipo': ['',''], 'talla': 0,'peso': 0}];
  cuenta = 0;
  pokemonSeleccionado='';
  constructor(private servicePokemons: PokemonsService) { }
  ngOnInit() {
  this.pokemons = this.servicePokemons.getPokemons();
  this.cuenta = this.servicePokemons.contarPokemons();
  }
}
