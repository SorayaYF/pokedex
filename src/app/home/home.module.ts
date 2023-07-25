import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PokemonModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
