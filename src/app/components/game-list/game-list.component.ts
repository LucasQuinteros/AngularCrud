import { Component, OnInit } from '@angular/core';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games : Game[] = []

  constructor( private gameService : GamesService) { 
    
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe( 
      (game) => this.games = game)
  }

}
