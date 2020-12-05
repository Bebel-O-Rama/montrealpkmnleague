import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import value, * as data from './pokemons.json';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  team = new Array<number>(6)
  static teamIndex = 0;

  constructor(private cookieService:CookieService, private router : Router) { }
  pokemons: any = (data as any).default;
  pokemons$: Observable<any[]> = of([this.pokemons]);

  lastAddedPkmn = 0;

  ngOnInit() {
    this.pokemons$;
  }
  
  gotoLink(link:string) {
    this.router.navigate([link]);
  }

  ajouterEquipe(id:HTMLElement) {
    let val = id.getAttribute('data-indexNb');
    console.log(val);
    this.team[PokedexComponent.teamIndex] = + (val == null ? -1 : val);
    this.cookieService.set(""+PokedexComponent.teamIndex, ""+val);

    this.lastAddedPkmn = +(val == null ? -1 : val);

    if(PokedexComponent.teamIndex < 6)
      PokedexComponent.teamIndex++;
  }

  // displayImg(index:Int16Array): HTMLImageElement{
  //   document.getElementById("pokemons")

  //   return
  // }
  // c = document.getElementById("pokemons");
  // ctx = this.c.getContext("2d");
  // img = document.getElementById("pokemons")

  // DrawPokemon(index){
  //   this.ctx.drawImage(img, )
  // }
}