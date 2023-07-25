import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTypesComponent } from './components/pokemon-types/pokemon-types.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonTypesComponent,
    PokemonSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokemonComponent,
    PokemonCardComponent
  ]
})
export class PokemonModule { }
