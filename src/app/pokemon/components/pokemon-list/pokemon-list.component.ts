import { Component, Input } from '@angular/core';
import { PokemonZeros } from '../../models/pokemon-zeros';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent extends PokemonZeros {
  @Input()
  pokemon: any;

  constructor(private pokemonService: PokemonService) {
    super();
  }
}
