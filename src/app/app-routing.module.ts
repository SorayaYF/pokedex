import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { PokemonCardComponent } from './pokemon/components/pokemon-card/pokemon-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:number', component: PokemonCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
