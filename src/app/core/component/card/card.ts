import { Component, inject } from '@angular/core';
import { gameService } from '../../service/game/game.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  gameService = inject(gameService);
  games = this.gameService.gameList;
}
