import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomeModule, PokemonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
