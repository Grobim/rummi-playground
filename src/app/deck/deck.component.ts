import { Component, Input, OnInit } from '@angular/core';

import { Deck } from '../models/deck';
import { Token } from '../models/token';
import { Color } from '../models/color.enum';

@Component({
  selector: 'rummi-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input()
  playerDeck: Deck;

  constructor() { }

  ngOnInit() { }

  isBlack(token: Token): boolean {
    return this.isColor(token, Color.Black);
  }

  isBlue(token: Token): boolean {
    return this.isColor(token, Color.Blue);
  }

  isYellow(token: Token): boolean {
    return this.isColor(token, Color.Yellow);
  }

  isRed(token: Token): boolean {
    return this.isColor(token, Color.Red);
  }

  private isColor(token: Token, color: Color): boolean {
    return token.color === color;
  }

}
