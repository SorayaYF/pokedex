import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  public getAllPokemons: Pokemon[];
  private setAllPokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.setAllPokemons = [];
    this.getAllPokemons = this.setAllPokemons;
  }

  ngOnInit(): void {
    this.pokemonService.listAllPokemons().subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
