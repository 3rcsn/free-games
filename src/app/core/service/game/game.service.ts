import { inject, Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Game } from '../../model/game.model';

@Injectable({
  providedIn: 'root',
})
export class gameService {
  private readonly http = inject(HttpClient);

  private endpoint: string | undefined = '/api/giveaways';

  readonly gameList = httpResource<Game[]>(() => this.endpoint);

  getGames( ) {
    return this.gameList.value;
  }
}
