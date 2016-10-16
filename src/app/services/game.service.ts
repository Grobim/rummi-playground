import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { Deck } from '../models/deck';
import { Token } from '../models/token';

import { COLORS } from '../models/color.enum';
import { VALUES } from '../models/value.enum';

@Injectable()
export class GameService {

  private static readonly DECK_SIZE = 16;

  constructor() { }

  newGame(): Game {
    const createdGame: Game = {
      bag: []
    };

    COLORS.forEach(color => {
      VALUES.forEach(value => {
        createdGame.bag.push({
          color,
          value
        }, {
          color,
          value
        });
      });
    });

    return createdGame;
  }

  dealDeck(game: Game): Deck {
    const tokens: Token[] = [];
    for (let i = 0; i < GameService.DECK_SIZE && game.bag.length; ++i) {
      tokens.push(this.drawToken(game));
    }
    return {
      tokens
    };
  }

  drawToken(game: Game): Token {
    const gameBag = game.bag;
    const randomToken = gameBag[this.getRandom(gameBag.length)];

    game.bag = gameBag.filter(token => token !== randomToken);
    return randomToken;
  }

  private getRandom(max: number) {
    const min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
