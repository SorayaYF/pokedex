import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search-type',
  templateUrl: './pokemon-search-type.component.html',
  styleUrls: ['./pokemon-search-type.component.scss'],
})
export class PokemonSearchTypeComponent implements OnInit {
  @Output()
  public emmitTypeSearch: EventEmitter<string> = new EventEmitter();

  public types: string[] = [];
  public selectedType!: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.listAllTypes().subscribe((types: any) => {
      this.types = types.results.map((type: any) => type.name);
    });
  }

  searchByType() {
    this.emmitTypeSearch.emit(this.selectedType);
  }

  showAllPokemons() {
    this.emmitTypeSearch.emit('all');
  }
}
