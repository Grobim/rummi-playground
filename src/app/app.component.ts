import { Component, OnInit } from '@angular/core';

import { Game } from './models/game';
import { Deck } from './models/deck';

import { GameService } from './services/game.service';

@Component({
  selector: 'rummi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  game: Game;
  firstPlayerDeck: Deck;
  secondPlayerDeck: Deck;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.game = this.gameService.newGame();

    this.firstPlayerDeck = this.gameService.dealDeck(this.game);

    this.secondPlayerDeck = this.gameService.dealDeck(this.game);
  }
}
