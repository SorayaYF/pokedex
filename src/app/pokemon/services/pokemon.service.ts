import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private listOfPokemons = 151;
  private allPokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${this.listOfPokemons}/`;
  private allTypesUrl = 'https://pokeapi.co/api/v2/type/';

  constructor(private httpClient: HttpClient) {}

  listAllPokemons(): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.allPokemonsUrl).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: Pokemon) => {
          this.apiGetPokemons(resPokemons.url).subscribe((resposta) => {
            if (resPokemons.name == 'nidoran-f') {
              resPokemons.name = 'nidoran_f';
            }
            if (resPokemons.name == 'nidoran-m') {
              resPokemons.name = 'nidoran_m';
            }
            if (resPokemons.name == 'mr-mime') {
              resPokemons.name = 'mr.mime';
            }
            resPokemons.id = resposta.id;
            resPokemons.types = resposta.types;
            resPokemons.stats = resposta.stats;
            resPokemons.abilities = resposta.abilities;
          });
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.httpClient.get<Pokemon>(url).pipe(map((res) => res));
  }

  public getTypeRelations(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map((res) => res));
  }

  public onLoadMore() {
    this.listOfPokemons += 151;
  }

  public listAllTypes(): Observable<any> {
    return this.httpClient.get<any>(this.allTypesUrl);
  }
}
