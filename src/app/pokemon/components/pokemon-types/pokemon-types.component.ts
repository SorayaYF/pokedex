import { Component, Input } from '@angular/core';
import { PokemonType } from '../../models/pokemon-type';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss'],
})
export class PokemonTypesComponent {
  @Input()
  types: PokemonType[] = [];

  constructor(private pokemonService: PokemonService) {}
}
